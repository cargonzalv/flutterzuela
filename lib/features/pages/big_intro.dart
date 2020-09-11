import 'dart:math' as math;
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutterzuela/features/pages/detalle.dart';
import 'package:flutterzuela/features/pages/groupon_theme.dart';
import 'package:flutterzuela/shared/utils.dart';
import 'package:flutterzuela/shared/venezuelan.dart';
import 'package:presentation/presentation.dart';

class BigIntro extends StatelessWidget {
  const BigIntro({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        Expanded(
          child: Padding(
            padding: EdgeInsets.only(left: 30),
            child: _Title(),
          ),
        ),
        Expanded(child: _FlutterProjects()),
      ],
    );
  }
}

class _Title extends StatelessWidget {
  const _Title({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text.rich(
      TextSpan(
        style: Theme.of(context).textTheme.headline5,
        children: <InlineSpan>[
          WidgetSpan(
            child: Image.asset(
              'assets/flutter.png',
              height: 130,
            ),
          ),
          const TextSpan(
            text: 'lutterzuela \n',
            style: TextStyle(fontSize: 40),
          ),
          const TextSpan(
            text:
                'Vida en la alta alcurnia caraqueña y su intrínseca relación con Flutter',
            style: TextStyle(fontSize: 50, color: GTheme.green),
          ),
        ],
      ),
    );
  }
}

class _FlutterProjects extends StatefulWidget {
  const _FlutterProjects({Key key}) : super(key: key);

  @override
  __FlutterProjectsState createState() => __FlutterProjectsState();
}

const minSize = 30.0;
const maxSize = 300.0;

class __FlutterProjectsState extends State<_FlutterProjects>
    with SingleTickerProviderStateMixin {
  AnimationController _controller;
  List<_Circle> _circles;
  List<Venezuelan> _venezuelans;

  @override
  void initState() {
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 5),
    );
    loadVenezuelans().then((response) {
      setState(() {
        _venezuelans = response;
        _circles = _createCircles(math.Random()).toList();
      });
    });
    super.initState();
  }

  Future<List<Venezuelan>> loadVenezuelans() async {
    final commit = '27f4fd4dd42679c13b5276625d813de7d3d2208c';
    final path =
        'https://raw.githubusercontent.com/cargonzalv/flutterzuela/$commit/assets/venezuelans.json';
    // final path = 'assets/venezuelans.json';
    final response = await loadAsset(path);
    final List<Venezuelan> venezuelans = [];
    final promises = response['data'].map(
      (v) async {
        final venezuelan = Venezuelan.fromJson(v);
        venezuelan.media = await venezuelan.getMedia(context);
        return venezuelan;
      },
    );
    for (final Future<Venezuelan> promise in promises) {
      final veneco = await promise;
      venezuelans.add(veneco);
    }
    return venezuelans;
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (AnimationMode.of(context)) {
      _controller.repeat();
    }
  }

  static const comandantes = [
    'assets/venezuelans/hugo-chavez.jpg',
    'assets/venezuelans/nicolas-maduro.jpg',
    'assets/venezuelans/diosdado-cabello.jpg',
  ];

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, c) {
        return Stack(
          fit: StackFit.expand,
          children: _circles
                  ?.map((i) => Positioned(
                        left: (c.maxWidth - i.size) * i.x,
                        top: (c.maxHeight - i.size) * i.y,
                        child: LoopTransition(
                          seed: math.Random().nextDouble(),
                          scale: _controller,
                          radius: 400 / i.size,
                          child: _Bubble(
                            size: i.size,
                            person: _venezuelans[_circles.indexOf(i)],
                          ),
                        ),
                      ))
                  ?.toList() ??
              [],
        );
      },
    );
  }

  _Circle _generateCircle(math.Random random, {double min, double max}) {
    return _Circle(
      size: random.nextDouble() * (max - min) + min,
      x: random.nextDouble(),
      y: random.nextDouble(),
    );
  }

  Iterable<_Circle> _createCircles(math.Random random) sync* {
    for (int i = 0; i < _venezuelans.length; i++) {
      final venezuelan = _venezuelans[i];
      if (comandantes.contains(venezuelan.url)) {
        yield _createLargeCircle(random);
      } else {
        final r = Random().nextDouble();
        if (r > 0.7) {
          yield _createMediumCircle(random);
        } else {
          yield _createSmallCircle(random);
        }
      }
    }
  }

  _Circle _createSmallCircle(math.Random random) {
    return _generateCircle(random, min: minSize, max: 75);
  }

  _Circle _createMediumCircle(math.Random random) {
    return _generateCircle(random, min: 100, max: 150);
  }

  _Circle _createLargeCircle(math.Random random) {
    return _generateCircle(random, min: 200, max: maxSize);
  }
}

class _Circle {
  const _Circle({
    @required this.size,
    @required this.x,
    @required this.y,
  });

  final double size;
  final double x;
  final double y;
}

class _Bubble extends StatelessWidget {
  const _Bubble({
    Key key,
    this.size = 30,
    this.color = Colors.orange,
    this.person = null,
  }) : super(key: key);

  final double size;
  final Color color;
  final Venezuelan person;

  @override
  Widget build(BuildContext context) {
    return PhotoHero(
      photo: person.url,
      size: size,
      tag: '$person.url-$size',
      onTap: () {
        Navigator.of(context).push(
          PageRouteBuilder<Detalle>(
            transitionDuration: const Duration(milliseconds: 500),
            opaque: false,
            barrierDismissible: true,
            pageBuilder: (BuildContext context, _, __) {
              return Detalle(
                onTap: () {
                  Navigator.of(context).pop();
                },
                person: person,
                size: 100,
                tag: '$person.url-$size',
              );
            },
          ),
        );
      },
    );
  }
}

class PhotoHero extends StatelessWidget {
  const PhotoHero({Key key, this.photo, this.onTap, this.size, this.tag})
      : super(key: key);

  final String photo;
  final VoidCallback onTap;
  final double size;
  final String tag;

  @override
  Widget build(BuildContext context) {
    return Hero(
      tag: tag,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(50 * size),
        child: MouseRegion(
          cursor: SystemMouseCursors.click,
          child: GestureDetector(
            onTap: onTap,
            child: Image.asset(
              photo.isNotEmpty ? photo : 'assets/android.png',
              height: size,
              width: size,
              fit: BoxFit.fitHeight,
            ),
          ),
        ),
      ),
    );
  }
}

class LoopTransition extends AnimatedWidget {
  const LoopTransition({
    Key key,
    @required Animation<double> scale,
    this.radius = 40,
    @required this.seed,
    this.child,
  })  : assert(scale != null),
        super(key: key, listenable: scale);

  Animation<double> get scale => listenable;

  final Widget child;
  final double radius;
  final double seed;

  @override
  Widget build(BuildContext context) {
    final x =
        radius * math.sin((2 * math.pi * scale.value) + 2 * math.pi * seed);
    final y = radius * math.cos(2 * math.pi * scale.value + 2 * math.pi * seed);
    return Transform.translate(
      offset: Offset(x, y),
      child: child,
    );
  }
}

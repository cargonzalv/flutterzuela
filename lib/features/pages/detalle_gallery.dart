import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutterzuela/features/pages/detalle.dart';
import 'package:flutterzuela/shared/utils.dart';
import 'package:flutterzuela/shared/venezuelan.dart';

class DetalleGallery extends StatelessWidget {
  DetalleGallery({
    Key key,
    @required this.person,
    @required this.images,
    @required this.parent,
  }) : super(key: key);

  final Venezuelan person;
  final List<String> images;
  final DetalleState parent;

  @override
  Widget build(BuildContext context) {
    final _width = MediaQuery.of(context).size.width;
    return SliverGrid.count(
      crossAxisCount: (_width / 300).round(),
      children: List<Widget>.from(images?.map(
        (url) => Material(
          child: InkWell(
            onTap: () {
              parent.toggleVisibility();
            },
            child: Hero(
              tag: '$url-grid',
              child: feedImage(url),
            ),
          ),
        ),
      )),
    );
  }
}

Image feedImage(String url) => url.contains('youtube.com')
    ? Image.network(
        'https://img.youtube.com/vi/${getYoutubeID(url)}/0.jpg',
        height: 35,
        fit: BoxFit.fitHeight,
      )
    : Image.asset(
        url,
        height: 35,
        fit: BoxFit.fitHeight,
      );

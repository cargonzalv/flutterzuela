import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutterzuela/features/pages/big_intro.dart';
import 'package:flutterzuela/features/pages/detalle_gallery.dart';
import 'package:flutterzuela/shared/utils.dart';
import 'package:flutterzuela/shared/venezuelan.dart';
import 'package:photo_view/photo_view.dart';
import 'dart:ui' as ui;

import 'package:presentation/presentation.dart';

class Detalle extends StatefulWidget {
  const Detalle({Key key, this.person, this.onTap, this.size, this.tag})
      : super(key: key);

  final Venezuelan person;
  final VoidCallback onTap;
  final double size;
  final String tag;

  @override
  DetalleState createState() => DetalleState();
}

class DetalleState extends State<Detalle> {
  PageController controller;
  PresentationController presentationController;
  List<ValueGetter<Widget>> pageCreator;
  List<String> images;
  bool visible = false;

  @override
  void initState() {
    super.initState();
    controller = PageController();
    presentationController = PresentationController(controller: controller);
    pageCreator = <ValueGetter<Widget>>[];
    images = List<String>.from(widget.person?.media
            ?.where((i) => !i.contains('${widget.person.id}.jpg'))) ??
        [];
    if (widget.person?.videos != null) {
      images.addAll(widget.person.videos);
    }
  }

  @override
  void dispose() {
    presentationController.dispose();
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final _width = MediaQuery.of(context).size.width;
    final _height = MediaQuery.of(context).size.height;

    return Stack(
      children: <Widget>[
        Container(
          color: Colors.blue,
        ),
        BackdropFilter(
          filter: ui.ImageFilter.blur(
            sigmaX: 6.0,
            sigmaY: 6.0,
          ),
          child: Container(
            decoration: BoxDecoration(
              color: Colors.blue.withOpacity(0.9),
              borderRadius: BorderRadius.all(Radius.circular(50.0)),
            ),
          ),
        ),
        Scaffold(
          appBar: AppBar(
            title: Text(widget.person.fullname),
            centerTitle: false,
            elevation: 0,
            backgroundColor: Colors.transparent,
          ),
          // drawer: Drawer(
          //   child: Container(),
          // ),
          // floatingActionButton: Align(
          //   alignment: Alignment(0.95, -0.9),
          //   child: FloatingActionButton(
          //     onPressed: () => Navigator.of(context).pop(),
          //     child: const Icon(Icons.cancel),
          //   ),
          // ),
          backgroundColor: Colors.transparent,
          body: CustomScrollView(
            slivers: <Widget>[
              SliverToBoxAdapter(
                child: SizedBox(
                  height: _height / 12,
                ),
              ),
              SliverToBoxAdapter(
                child: PhotoHero(
                  size: widget.size,
                  tag: widget.tag,
                  photo: widget.person.url,
                  onTap: () => Navigator.canPop(context)
                      ? Navigator.of(context).pop()
                      : null,
                ),
              ),
              SliverToBoxAdapter(
                child: SizedBox(
                  height: _height / 25.0,
                ),
              ),
              SliverToBoxAdapter(
                child: Center(
                  child: Text(
                    widget.person.name,
                    style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: _height / 15,
                        color: Colors.white),
                  ),
                ),
              ),
              SliverToBoxAdapter(
                child: Center(
                  child: Text(
                    widget.person.name,
                    style: TextStyle(
                        fontWeight: FontWeight.normal,
                        fontStyle: FontStyle.italic,
                        fontSize: _height / 40,
                        color: Colors.grey),
                  ),
                ),
              ),
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.only(
                      top: _height / 30, left: _width / 8, right: _width / 8),
                  child: Text(
                    widget.person.description,
                    style: TextStyle(
                        fontWeight: FontWeight.normal,
                        fontSize: _height / 25,
                        color: Colors.white),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
              SliverToBoxAdapter(
                child: Divider(
                  height: _height / 30,
                  color: Colors.white,
                ),
              ),
              SliverToBoxAdapter(
                child: Row(
                  children: <Widget>[
                    rowCell(
                        max(
                            (widget.person.media.length - 1) +
                                widget.person.videos.length,
                            0),
                        'POSTS'),
                    rowCell(420, 'FOLLOWERS'),
                    rowCell(69, 'FOLLOWING'),
                  ],
                ),
              ),
              SliverToBoxAdapter(
                child: Divider(height: _height / 30, color: Colors.white),
              ),
              DetalleGallery(
                person: widget.person,
                images: images,
                parent: this,
              ),
            ],
          ),
        ),
        Visibility(
          visible: visible,
          child: Presentation(
            controller: controller,
            presentationController: presentationController,
            children: List<Widget>.from(
              images.map(
                (i) {
                  return GestureDetector(
                    onTap: () {
                      toggleVisibility();
                      if (i.contains('youtube.com')) {
                        playVideo(i);
                      }
                    },
                    child: PhotoView(
                      disableGestures: true,
                      tightMode: true,
                      heroAttributes: PhotoViewHeroAttributes(tag: '$i-grid'),
                      imageProvider: feedImage(i).image,
                    ),
                  );
                },
              ),
            ),
          ),
        )
      ],
    );
  }

  Widget rowCell(int count, String type) => Expanded(
          child: Column(
        children: <Widget>[
          Text(
            '$count',
            style: TextStyle(color: Colors.white),
          ),
          Text(type,
              style:
                  TextStyle(color: Colors.white, fontWeight: FontWeight.normal))
        ],
      ));
  void toggleVisibility() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      setState(() {
        visible = !visible;
      });
    });
  }
}

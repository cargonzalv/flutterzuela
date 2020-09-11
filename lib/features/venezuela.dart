import 'package:flutter/material.dart';
import 'package:flutterzuela/features/pages/big_intro.dart';
import 'package:flutterzuela/features/pages/intro.dart';
import 'package:flutterzuela/features/pages/thats_all.dart';

import 'package:flutterzuela/shared/themes.dart';
import 'package:presentation/presentation.dart';

class Venezuela extends StatefulWidget {
  const Venezuela({Key key}) : super(key: key);
  static const String title = 'Venezuela';
  static const String subtitle = "(It's not that bad)";

  @override
  VenezuelaState createState() => VenezuelaState();
}

class VenezuelaState extends State<Venezuela> {
  PageController controller;
  PresentationController presentationController;
  List<ValueGetter<Widget>> pageCreator;

  @override
  void initState() {
    super.initState();
    controller = PageController();
    presentationController = PresentationController(controller: controller);
    pageCreator = <ValueGetter<Widget>>[];
  }

  @override
  void dispose() {
    presentationController.dispose();
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: blueDark(),
      child: Material(
        color: Colors.white,
        child: Presentation(
          controller: controller,
          presentationController: presentationController,
          children: [
            // const TitlePage(),
            const BigIntro(),
            const ThatsAll(thanks: 'Arigatou!')
          ],
        ),
      ),
    );
  }
}

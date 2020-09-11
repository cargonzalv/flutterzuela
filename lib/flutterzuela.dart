import 'dart:html' as html;
import 'package:flutter/material.dart';
import 'package:flutterzuela/features/venezuela/venezuela.dart';

class FlutterPresentations extends StatefulWidget {
  const FlutterPresentations({Key key}) : super(key: key);

  static final GlobalKey gKey = GlobalKey<NavigatorState>();

  @override
  _FlutterPresentationsState createState() => _FlutterPresentationsState();
}

class _FlutterPresentationsState extends State<FlutterPresentations> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      navigatorKey: FlutterPresentations.gKey,
      theme: ThemeData(fontFamily: 'Montserrat'),
      home: const _PresentationList(),
    );
  }
}

class _PresentationList extends StatelessWidget {
  const _PresentationList({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Venezuela(),
    );
  }
}

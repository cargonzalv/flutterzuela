import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:meta/meta.dart';

Iterable<T> join<T>({
  @required T separator,
  @required Iterable<T> children,
}) sync* {
  final iterator = children.iterator;
  if (iterator.moveNext()) {
    yield iterator.current;
    while (iterator.moveNext()) {
      yield separator;
      yield iterator.current;
    }
  }
}

Future<Map<String, dynamic>> loadAsset(String path) async {
  return jsonDecode((await rootBundle.loadString(path)).toString());
}

import 'dart:convert';

import 'package:flutter/widgets.dart';

class Venezuelan {
  Venezuelan({
    @required this.id,
    @required this.name,
    @required this.profession,
    @required this.url,
    @required this.description,
    @required this.nickname,
    this.media,
  });

  factory Venezuelan.fromJson(Map<String, dynamic> json) {
    final venezuelan = Venezuelan(
      id: json['id'],
      name: json['name'],
      url: json['url'],
      description: json['description'],
      profession: json['profession'],
      nickname: json['nickname'],
    );
    return venezuelan;
  }

  Future<List<String>> getMedia(BuildContext context) async {
    final manifestContent =
        await DefaultAssetBundle.of(context).loadString('AssetManifest.json');
    final Map<String, dynamic> manifestMap = json.decode(manifestContent);
    final searchTerm = 'assets/venezuelans/$id';
    final imagePaths = manifestMap.keys
            .where((String key) => key.contains(searchTerm))
            .toList() ??
        [];
    return imagePaths;
  }

  String id;
  String name;
  String url;
  String description;
  String profession;
  String nickname;
  List<String> media;
}

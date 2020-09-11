import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:meta/meta.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/foundation.dart';
import 'package:universal_html/html.dart' as html;

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
  if (path.contains('http')) {
    final responseData = await http.get(path);
    if (responseData.statusCode == 200) {
      return jsonDecode(responseData.body);
    }
  } else {
    return jsonDecode((await rootBundle.loadString(path)).toString());
  }
  return null;
}

void playVideo(String atUrl) {
  if (kIsWeb) {
    final v = html.window.document.getElementById('videoPlayer');
    if (v != null) {
      if (!atUrl.contains('youtube.com') && atUrl.length > 11) {
        v.setInnerHtml('<source type="video/mp4" src="$atUrl">',
            validator: html.NodeValidatorBuilder()
              ..allowElement('source', attributes: ['src', 'type']));
      } else {
        String youtubeID = getYoutubeID(atUrl);
        print(youtubeID);
        if (atUrl.length == 11) {
          youtubeID = atUrl;
        }
        v.setAttribute('data-youtube-id', youtubeID);
      }
      final a = html.window.document.getElementById('triggerVideoPlayer');
      if (a != null) {
        a.dispatchEvent(html.MouseEvent('click'));
      }
    }
  } else {
    // we're not on the web platform
    // and should use the video_player package
  }
}

String getYoutubeID(String atUrl) {
  return atUrl.substring(atUrl.indexOf('v=') + 2, atUrl.indexOf('v=') + 13);
}

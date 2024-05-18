import 'package:flutter/material.dart';

import '../classes/class_color.dart';

class SubjectsText extends StatelessWidget {
  String text;
   SubjectsText({
    super.key,required this.text
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: FontWeight.w800,
        decoration: TextDecoration.underline,
        decorationColor: ColorManager.mainGreen,
        decorationThickness: 5,
      ),
    );
  }
}

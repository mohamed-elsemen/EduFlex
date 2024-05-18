import 'package:flutter/material.dart';

import '../classes/class_color.dart';

class TermButton extends StatelessWidget {
  String text;
  void Function()? onTap;
  TermButton({super.key, required this.text, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 90,
      height: 36,
      decoration: BoxDecoration(
        border: Border.all(style: BorderStyle.none),
        borderRadius: BorderRadius.circular(10),
        color: ColorManager.mainGreen,
      ),
      child: GestureDetector(
        onTap: onTap,
        child: Center(
          child: Text(
            text,
            style: const TextStyle(
                color: Colors.white,
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: FontWeight.w500),
          ),
        ),
      ),
    );
  }
}

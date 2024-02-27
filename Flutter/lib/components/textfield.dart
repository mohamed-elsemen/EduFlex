import 'package:edu_flex/classes/class_color.dart';
import 'package:flutter/material.dart';

class MyTextField extends StatelessWidget {
  MyTextField({super.key, required this.textHint, required this.icon,});
  final String textHint;
  IconButton? icon;
  GlobalKey<FormState> formState = GlobalKey();


  @override
  Widget build(BuildContext context) {
    return Form(
      child: TextFormField(
        decoration: InputDecoration(
          hintText: textHint,
          focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(15),
      ),
      enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(15),
      borderSide: const BorderSide(color: Colors.black12),
      ),
      filled: true,
      suffixIcon: icon,
      fillColor: const Color(0xffEDEDEDED),
      border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(10),
      ),
      ),
      ),
    );
  }
}

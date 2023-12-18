import 'package:edu_flex/classes/class_color.dart';
import 'package:flutter/material.dart';

class MyPasswordField extends StatefulWidget {
  const MyPasswordField({super.key, required this.text});
  final String text;

  @override
  State<MyPasswordField> createState() => _MyPasswordFieldState();
}

class _MyPasswordFieldState extends State<MyPasswordField> {
  bool secureText = true;
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      obscureText: secureText,
      decoration: InputDecoration(
        hintText: widget.text,
        enabled: true,
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(15),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(15),
          borderSide: const BorderSide(color: Colors.black12),
        ),
        filled: true,
        suffixIcon: IconButton(
            onPressed: () {
              setState(() {
                secureText = !secureText;
              });
            },
            icon: Icon(secureText ? Icons.visibility_off : Icons.visibility)),
        fillColor: ColorManager.lightGray,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10),
        ),
      ),
    );
  }
}

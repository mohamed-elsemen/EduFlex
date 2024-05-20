import 'package:flutter/material.dart';

class SelectedItemSideMenu extends StatelessWidget {
  String text;
  void Function()? onTap;
  SelectedItemSideMenu({
    super.key,
    required this.text,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Center(
        child: Text(
          text,
          style: const TextStyle(
              fontFamily: 'Roboto', fontSize: 16, fontWeight: FontWeight.w500),
        ),
      ),
      onTap: onTap,
    );
  }
}

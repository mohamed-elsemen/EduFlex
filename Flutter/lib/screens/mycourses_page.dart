import 'package:flutter/material.dart';

class MyCoursesPage extends StatelessWidget {
  const MyCoursesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Image(
            image: AssetImage('assets/images/mycourses_screen/mycourses.png')),
      ),
    );
  }
}

import 'package:flutter/material.dart';

class CoursePhoto extends StatelessWidget {
  const CoursePhoto({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 162,
      height: 152,
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(12)),
        image: DecorationImage(
          image: AssetImage('assets/images/home_screen/topCourse.png'),
        ),
      ),
    );
  }
}

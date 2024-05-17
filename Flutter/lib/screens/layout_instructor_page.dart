
import 'package:flutter/material.dart';
import 'package:new_eduflex/screens/search_page.dart';
import 'package:new_eduflex/screens/toprating_page.dart';

import '../classes/class_color.dart';
import 'account_page.dart';
import 'instructor_home_page.dart';
import 'student_home_page.dart';
import 'mycourses_page.dart';

class LayoutInstructorPage extends StatefulWidget {
  const LayoutInstructorPage({super.key});

  @override
  State<LayoutInstructorPage> createState() => _LayoutInstructorPageState();
}

class _LayoutInstructorPageState extends State<LayoutInstructorPage> {
  final NavPages = [
    const AccountPage(),
    const SearchPage(),
    const InstructorHomePage(),
    const TopRatingPage(),
  ];
  int _selectedIndex = 2;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        selectedIconTheme: const IconThemeData(size: 35),
        selectedFontSize: 13,
        selectedItemColor: ColorManager.mainGreen,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        currentIndex: _selectedIndex,
        elevation: 0,
        backgroundColor: ColorManager.lightGray,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(Icons.account_circle_outlined), label: 'Account'),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(
              icon: Icon(Icons.home_outlined), label: 'Home'),
          BottomNavigationBarItem(
              icon: Icon(Icons.star_border_outlined), label: 'Top Rating'),
        ],
      ),
      body: NavPages[_selectedIndex],
    );
  }
}

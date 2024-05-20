
import 'package:flutter/material.dart';
import 'package:new_eduflex/screens/search_page.dart';
import 'package:new_eduflex/screens/wishlist_page.dart';

import '../classes/class_color.dart';
import 'account_page.dart';
import 'student_home_page.dart';
import 'mycourses_page.dart';

class LayoutStudentPage extends StatefulWidget {
  const LayoutStudentPage({super.key});

  @override
  State<LayoutStudentPage> createState() => _LayoutStudentPageState();
}

class _LayoutStudentPageState extends State<LayoutStudentPage> {
  final NavPages = [
    const AccountPage(),
    const SearchPage(),
    const StudentHomePage(),
    const WishListPage(),
    const MyCoursesPage()
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
              icon: Icon(Icons.star_border_outlined), label: 'Wish List'),
          BottomNavigationBarItem(
              icon: Icon(Icons.play_arrow_outlined), label: 'My Courses'),
        ],
      ),
      body: NavPages[_selectedIndex],
    );
  }
}

import 'package:edu_flex/screens/choose_sign_up_page.dart';
import 'package:edu_flex/screens/forgot_password_page.dart';
import 'package:edu_flex/screens/home_page.dart';
import 'package:edu_flex/screens/instructor_signup_page.dart';
import 'package:edu_flex/screens/login_page.dart';
import 'package:edu_flex/screens/new_password_page.dart';
import 'package:edu_flex/screens/student_signup_page.dart';
import 'package:edu_flex/screens/splash_screen.dart';
import 'package:edu_flex/screens/verification_code_page.dart';
import 'package:flutter/material.dart';

void main (){
  runApp(const EduFlex());
}
class EduFlex extends StatefulWidget {
  const EduFlex({super.key});

  @override
  State<EduFlex> createState() => _EduFlexState();
}

class _EduFlexState extends State<EduFlex> {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
     home: SplashScreen(),
    );
  }
}

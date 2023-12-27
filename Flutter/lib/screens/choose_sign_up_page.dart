import 'package:edu_flex/classes/class_color.dart';
import 'package:edu_flex/components/maintext.dart';
import 'package:edu_flex/components/navigator_button.dart';
import 'package:edu_flex/screens/instructor_signup_page.dart';
import 'package:edu_flex/screens/student_signup_page.dart';
import 'package:flutter/material.dart';

class ChooseSignUp extends StatelessWidget {
  const ChooseSignUp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: ListView(
        children: [
          Container(
            margin: const EdgeInsets.only(bottom: 16),
            height: 97,
            width: 101,
            child: Image.asset(
              'assets/images/splash_screen/logo1.png',
              height: 91,
            ),
          ),
          MainText(text: 'Sign Up'),
          const SizedBox(height: 50,),
          MyNavigatorButton(
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(
                    builder: (context) =>  const Student_Signup_page()),
              ),
              height: 52,
              width: 243,
              color: ColorManager.mainGreen,
              text: 'Student'),
          const SizedBox(height: 5,),
          MyNavigatorButton(
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(
                    builder: (context) => const InstructorSignUp()),
              ),
              height: 52,
              width: 243,
              color: ColorManager.mainGreen,
              text: 'Instructor'),
        ],
      ),
    );
  }
}

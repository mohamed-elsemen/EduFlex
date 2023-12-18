import 'package:edu_flex/classes/class_color.dart';
import 'package:edu_flex/components/maintext.dart';
import 'package:edu_flex/components/navigator_button.dart';
import 'package:edu_flex/components/password.dart';
import 'package:edu_flex/components/text.dart';
import 'package:edu_flex/screens/choose_sign_up_page.dart';
import 'package:edu_flex/screens/forgot_password_page.dart';
import 'package:edu_flex/screens/home_page.dart';
import 'package:edu_flex/screens/student_signup_page.dart';
import 'package:flutter/material.dart';

import '../components/textfield.dart';

class Login_Screen extends StatefulWidget {
  const Login_Screen({super.key});

  @override
  State<Login_Screen> createState() => _Login_ScreenState();
}

class _Login_ScreenState extends State<Login_Screen> {
  String? email;
  String? Password;
  bool secureText = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
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
            MainText(
              text: 'Log In',
            ),
            const SmallText(text: 'Email address'),
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: MyTextField(
                textHint: 'Type your Email',
                icon: null,
              ),
            ),
            const SmallText(text: 'Password'),
             const Padding(
              padding: EdgeInsets.only(bottom: 4),
              child: MyPasswordField(text: 'Type your password', ),
            ),
            GestureDetector(
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const ForgotPassword()),
              ),
              child: const Text(
                'forgot password?',
                style: TextStyle(
                  fontFamily: 'Roboto',
                  fontWeight: FontWeight.w400,
                  fontSize: 16,
                  color: ColorManager.forgotGray,
                ),
              ),
            ),
            MyNavigatorButton(
              onTap: () => Navigator.of(context).pushReplacement(
                MaterialPageRoute(builder: (context) => const HomePage()),
              ),
              height: 52,
              color: ColorManager.mainGreen,
              width: 242,
              text: 'Log In',
            ),
            Padding(
              padding: const EdgeInsets.only(top: 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'Don\'t have an account ?',
                    style: TextStyle(
                        color: Color(0xff707070),
                        fontFamily: 'Roboto',
                        fontSize: 14,
                        fontWeight: FontWeight.w300),
                  ),
                  const SizedBox(
                    width: 8,
                  ),
                  GestureDetector(
                    onTap: () => Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                          builder: (context) => const ChooseSignUp()),
                    ),
                    child: const Text(
                      'Sign up',
                      style: TextStyle(
                          color: Color(0xff0038C1),
                          fontFamily: 'Roboto',
                          fontSize: 15,
                          fontWeight: FontWeight.w500),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

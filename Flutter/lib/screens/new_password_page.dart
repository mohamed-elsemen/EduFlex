import 'package:edu_flex/components/navigator_button.dart';
import 'package:edu_flex/components/password.dart';
import 'package:edu_flex/components/text.dart';
// ignore: unused_import
import 'package:edu_flex/components/textfield.dart';
import 'package:edu_flex/screens/login_page.dart';
import 'package:flutter/material.dart';
import 'package:quickalert/quickalert.dart';

import '../classes/class_color.dart';

class NewPassword extends StatefulWidget {
  const NewPassword({super.key});

  @override
  State<NewPassword> createState() => _NewPasswordState();
}

class _NewPasswordState extends State<NewPassword> {
  showAlert() {
    QuickAlert.show(
        context: context,
        type: QuickAlertType.success,
        text: 'Welcome back! Discover now!',
        title: 'Your password has been changed',
      onConfirmBtnTap: () => Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => const Login_Screen()),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
      ),
      backgroundColor: Colors.white,
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Padding(
            padding: EdgeInsets.all(16),
            child: Center(
              child: Text(
                'Create new Password',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w500,
                  fontFamily: 'Roboto',
                  color: ColorManager.logGrey,
                ),
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(top: 8.0),
            child: SmallText(text: 'New password'),
          ),
           const MyPasswordField(text: 'Enter your new password'),
          const Padding(
            padding: EdgeInsets.only(top: 8.0),
            child: SmallText(text: 'Confirm password'),
          ),
           const MyPasswordField(text: 'Confirm your password',),
          const Padding(
            padding: EdgeInsets.symmetric(vertical: 8.0),
            child: Text(
              '*Password must be at least 9 characters 1 uppercase.',
              style: TextStyle(
                fontWeight: FontWeight.w300,
                fontSize: 12,
                color: Color(0xffFF0000),
                fontFamily: 'Roboto',
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 8.0),
            child: MyNavigatorButton(
                onTap: () {
                  showAlert();
                },
                height: 52,
                width: 242,
                color: ColorManager.mainGreen,
                text: 'Submit'),
          )
        ],
      ),
    );
  }
}

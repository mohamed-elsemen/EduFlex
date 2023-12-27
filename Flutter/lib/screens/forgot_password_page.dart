import 'package:edu_flex/components/maintext.dart';
import 'package:edu_flex/components/navigator_button.dart';
import 'package:edu_flex/components/text.dart';
import 'package:edu_flex/components/textfield.dart';
import 'package:edu_flex/screens/verification_code_page.dart';
import 'package:flutter/material.dart';

import '../classes/class_color.dart';

class ForgotPassword extends StatelessWidget {
  const ForgotPassword({super.key});


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Padding(
            padding: EdgeInsets.all( 16.0),
            child: Text(
              'Forgot Password?',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: ColorManager.logGrey,
                fontSize: 28,
                fontWeight: FontWeight.w600,
                fontFamily: 'Roboto',
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(top: 50.0,bottom: 16),
            child: Text(
              'enter email associated with your account and we’ll send and email with instructions to reset password',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w300,
                fontFamily: 'Roboto',
                color: ColorManager.forgotGray,
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(vertical: 5.0),
            child: SmallText(text: 'Email address'),
          ),
          MyTextField(textHint: 'Enter your Email here', icon: null),
          Padding(
            padding:  const EdgeInsets.all(16.0),
            child: MyNavigatorButton(
                onTap: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const VerificationCode())
                  );
                } ,
                height: 52,
                width: 242,
                color: ColorManager.mainGreen,
                text: 'Send code'),
          ),
        ],
      ),
    );
  }
}

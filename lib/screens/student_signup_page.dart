import 'package:edu_flex/components/dropbox.dart';
import 'package:edu_flex/components/maintext.dart';
import 'package:edu_flex/components/navigator_button.dart';
import 'package:edu_flex/components/password.dart';
import 'package:edu_flex/components/text.dart';
import 'package:edu_flex/components/textfield.dart';
import 'package:edu_flex/screens/login_page.dart';
// ignore: unused_import
import 'package:edu_flex/screens/verification_code_page.dart';
import 'package:flutter/material.dart';
import 'package:quickalert/models/quickalert_type.dart';
import 'package:quickalert/widgets/quickalert_dialog.dart';
import '../classes/class_color.dart';

class Student_Signup_page extends StatefulWidget {
  const Student_Signup_page({super.key});

  @override 
  State<Student_Signup_page> createState() => _Student_Signup_pageState();
}

class _Student_Signup_pageState extends State<Student_Signup_page> {
  String? educationSelected;
  String? levelSelected;
  String? gradeSelected;
  bool isDropdownVisible = false;

  showAlert() {
    QuickAlert.show(
      context: context,
      type: QuickAlertType.success,
      text: 'Welcome back! Discover now!',
      title: 'You are signed up',
      onConfirmBtnTap: () => Navigator.of(context).push(
        MaterialPageRoute(builder: (context) => const Login_Screen()),
      ),
    );
  }

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
            Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: MainText(text: 'Sign Up'),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: Row(
                children: [
                  Expanded(
                    child: MyTextField(
                      textHint: 'First Name',
                      icon: null,
                    ),
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  Expanded(
                    child: MyTextField(
                      textHint: 'Last Name',
                      icon: null,
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: MyTextField(textHint: 'Email Address', icon: null),
            ),
            const Padding(
              padding: EdgeInsets.only(bottom: 16),
              child: MyPasswordField(
                text: 'Password',
              ),
            ),
            const MyPasswordField(
              text: 'Confirm password',
            ),
            const Padding(
              padding: EdgeInsets.only(top: 16.0),
              child: SmallText(text: 'Education'),
            ),
            Container(
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(bottom: 16),
              decoration: BoxDecoration(
                color: ColorManager.lightGray,
                border: Border.all(
                  color: ColorManager.logGrey,
                  width: 1,
                ),
                borderRadius: BorderRadius.circular(10),
              ),
              child: DropdownButtonFormField(
                dropdownColor: ColorManager.lightGray,
                decoration: const InputDecoration.collapsed(hintText: ''),
                hint: const Text('Select One'),
                items: ['General', 'Special', 'Graduated']
                    .map((e) => DropdownMenuItem(
                          value: e,
                          child: Text(e),
                        ))
                    .toList(),
                value: educationSelected,
                onChanged: (value) {
                  setState(() {
                    educationSelected = value!;
                    isDropdownVisible = true;
                  });
                },
              ),
            ),
            if (educationSelected == 'General') ...[
              MyDropBox(
                hintText: 'Level',
                items: const [
                  DropdownMenuItem(
                    value: 'Primary stage',
                    child: Text('Primary stage'),
                  ),
                  DropdownMenuItem(
                    value: 'Middle school',
                    child: Text('Middle school'),
                  ),
                  DropdownMenuItem(
                    value: 'High school',
                    child: Text('High school'),
                  ),

                ],
              ),
              MyDropBox(
                hintText: 'Grade',
                items: const [
                  DropdownMenuItem(
                    value: 'First grade',
                    child: Text('First grade'),
                  ),
                  DropdownMenuItem(
                    value: 'Second grade',
                    child: Text('Second grade'),
                  ),
                  DropdownMenuItem(
                    value: 'Third grade',
                    child: Text('Third grade'),
                  ),

                ],
              ),
            ],
            MyNavigatorButton(
              onTap: () {
                Navigator.of(context).pushReplacement(
                  MaterialPageRoute(builder: (context) => const Login_Screen()),
                );
              },
              height: 60,
              width: 252,
              color: ColorManager.mainGreen,
              text: 'Create Account',
            ),
            Padding(
              padding: const EdgeInsets.only(top: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'Already have account?',
                    style: TextStyle(
                        fontWeight: FontWeight.w300,
                        fontSize: 14,
                        color: Color(0xff505050)),
                  ),
                  const SizedBox(
                    width: 5,
                  ),
                  GestureDetector(
                    onTap: () => Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                          builder: (context) => const Login_Screen()),
                    ),
                    child: const Text(
                      'Log In',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 15,
                        color: Color(0xff0038C1),
                      ),
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

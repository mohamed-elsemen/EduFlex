import 'dart:io';
import 'package:edu_flex/classes/class_color.dart';
import 'package:edu_flex/components/maintext.dart';
import 'package:edu_flex/screens/verification_code_page.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:quickalert/models/quickalert_type.dart';
import 'package:quickalert/widgets/quickalert_dialog.dart';
import '../components/navigator_button.dart';
import '../components/password.dart';
import '../components/text.dart';
import '../components/textfield.dart';
import 'login_page.dart';

class InstructorSignUp extends StatefulWidget {
  const InstructorSignUp({super.key});

  @override
  State<InstructorSignUp> createState() => _InstructorSignUpState();
}

class _InstructorSignUpState extends State<InstructorSignUp> {
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
  File? image;
  final imagePicker = ImagePicker();
  uploadImage() async {
    var pickImage = await imagePicker.pickImage(source: ImageSource.camera);

    image = File(pickImage!.path);
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
                    child: MyTextField(textHint: 'First Name', icon: null),
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  Expanded(
                    child: MyTextField(textHint: 'Last Name', icon: null),
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
              child: SmallText(text: 'ID'),
            ),
            GestureDetector(
              onTap: uploadImage,
              child: Container(
                margin: const EdgeInsets.only(bottom: 16, left: 20, right: 20),
                decoration: BoxDecoration(
                  color: ColorManager.lightGray,
                  border: Border.all(
                    color: ColorManager.lightGray,
                    width: 1,
                  ),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: const Center(
                    child: Text(
                  '+',
                  style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                )),
              ),
            ),
            MyNavigatorButton(
              onTap: () => showAlert(),
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

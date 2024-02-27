import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: const [
          Row(
            children: [
              CircleAvatar(
                child: Icon(Icons.account_circle_outlined),
              )
            ],
git rebase origin/your_branch
          )
        ],
      ),
    );
  }
}

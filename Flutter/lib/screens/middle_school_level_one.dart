import 'package:flutter/material.dart';

import '../components/horizentallistview.dart';
import '../components/subjects_text.dart';
import '../components/term_button.dart';

class MiddleSchoolLevelOnePage extends StatelessWidget {
  const MiddleSchoolLevelOnePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: const Text(
          'Middle School : Level One',
          style: TextStyle(
              fontFamily: 'Roboto', fontWeight: FontWeight.w700, fontSize: 15),
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              TermButton(
                text: 'First term',
                onTap: () {},
              ),
              TermButton(
                text: 'second term',
                onTap: () {},
              )
            ],
          ),
          Row(
            children: [SubjectsText(text: 'Arabic')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'English')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Mathematics')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Sciences')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Social Studies')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Computer')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Drawing')],
          ),
          const ListViewHorizntal(),
        ],
      ),
    );
  }
}


import 'package:flutter/material.dart';

import '../components/horizentallistview.dart';
import '../components/subjects_text.dart';
import '../components/term_button.dart';


class MiddleSchoolLevelTwoPage extends StatelessWidget {
  const MiddleSchoolLevelTwoPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: const Text(
          'High School : Level Two',
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
            children: [SubjectsText(text: 'French')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Spanish')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'German')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Italian')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Geography')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'History')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Philosophy')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Mathematics')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Chemistry')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Biology')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Physics')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Islamic religious education')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Christian religious education')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'National education')],
          ),
          const ListViewHorizntal(),
          Row(
            children: [SubjectsText(text: 'Computer information technology')],
          ),
          const ListViewHorizntal(),
        ],
      ),
    );
  }
}

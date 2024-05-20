import 'package:flutter/material.dart';

class WishListPage extends StatelessWidget {
  const WishListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Image(
          image: AssetImage('assets/images/wishlist_screen/wishlist.png'),
        ),
      ),
      body: CustomScrollView(
        slivers: [],
      ),
    );
  }
}

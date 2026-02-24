Answers to Technical Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: এটি শুধুমাত্র একটি নির্দিষ্ট ID সম্পন্ন এলিমেন্টকে খুঁজে বের করে। এটি খুব দ্রুত কাজ করে।

getElementsByClassName: এটি একটি নির্দিষ্ট ক্লাসের সব এলিমেন্টকে একটি HTMLCollection হিসেবে রিটার্ন করে।

querySelector: এটি CSS সিলেক্টর ব্যবহার করে প্রথম এলিমেন্টটিকে খুঁজে বের করে। এটি অনেক বেশি ফ্লেক্সিবল।

querySelectorAll: এটি সিলেক্টরের সাথে মিলে যাওয়া সব এলিমেন্টকে একটি NodeList হিসেবে রিটার্ন করে।

2. How do you create and insert a new element into the DOM?

প্রথমে document.createElement('tagName') ব্যবহার করে একটি নতুন এলিমেন্ট তৈরি করতে হয়।

এরপর এলিমেন্টের ভেতরে তথ্য যোগ করার জন্য innerText বা innerHTML ব্যবহার করা হয়।

সবশেষে, appendChild() বা prepend() মেথড ব্যবহার করে এলিমেন্টটিকে DOM-এর নির্দিষ্ট জায়গায় যুক্ত করা হয়।

3. What is Event Bubbling? And how does it work?

ইভেন্ট বাবলিং হলো এমন একটি প্রক্রিয়া যেখানে কোনো চাইল্ড এলিমেন্টে (যেমন বাটন) ক্লিক করলে সেই ইভেন্টটি ক্রমান্বয়ে উপরের দিকে তার প্যারেন্ট এলিমেন্টগুলোতে ছড়িয়ে পড়ে। এটি নিচের থেকে উপরে (বাবলের মতো) ওঠে বলে একে বাবলিং বলা হয়।

4. What is Event Delegation in JavaScript? Why is it useful?

প্যারেন্ট এলিমেন্টে একটি মাত্র ইভেন্ট লিসেনার বসিয়ে তার সব চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডেল করাকে ইভেন্ট ডেলিগেশন বলে।

এটি কার্যকর কারণ এতে মেমোরি কম খরচ হয় এবং ডাইনামিকভাবে নতুন কোনো চাইল্ড এলিমেন্ট যোগ করলে তার জন্য আলাদা করে লিসেনার লিখতে হয় না।

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): এটি কোনো এলিমেন্টের ডিফল্ট আচরণ বন্ধ করে (যেমন: লিংকে ক্লিক করলে পেজ রিলোড হওয়া বন্ধ করা)।

stopPropagation(): এটি ইভেন্টটিকে উপরের দিকে বাবলিং হতে বা প্যারেন্ট এলিমেন্টে ছড়িয়ে পড়া বন্ধ করে।

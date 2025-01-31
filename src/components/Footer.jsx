import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <div class="bg-gray-600 text-white py-10 ">
        <div class="container mx-auto px-6">
          <div class="flex flex-wrap justify-between">
            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4">FAQ</h3>
              <ul>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    What is StaySmart?
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    How to register?
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Hostel payment details
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Contact for queries
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
              <ul>
                <li>
                  <a href="mailto:contact@vjti.org" class="hover:text-blue-400">
                    Email: contact@vjti.org
                  </a>
                </li>
                <li>
                  <a href="tel:+912226525999" class="hover:text-blue-400">
                    Phone: +91 22 2652 5999
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vjti.ac.in"
                    class="hover:text-blue-400"
                    target="_blank"
                  >
                    Website: www.vjti.ac.in
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4 text-white">
                VJTI Hostel Address
              </h3>
              <p class="text-sm">VJTI, Mumbai - 400 019, Maharashtra, India</p>
            </div>

            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-lg font-semibold mb-4">Rector Details</h3>
              <p>
                <strong>Chief Rector:</strong> Dr. A.N. Bambole
              </p>
              <p>
                <strong>Rector, Boys Hostel:</strong> Prof. V.B. Suryawanshi
              </p>
              <p>
                <strong>Rector, Girls Hostel:</strong> Prof. Shraddha Suratkar
              </p>
            </div>
          </div>

          <div class="text-center mt-10 text-sm">
            <p>&copy; 2024 VJTI StaySmart. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

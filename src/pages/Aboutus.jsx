import React from "react";
import Footer from "../components/Footer";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";

const Aboutus = () => {
  return (
    <>
      <div
        className="w-full min-h-[calc(100vh-60px)] mt-[68px]  text-white p-8 backdrop-blur-sm bg-slate-500 
    
    bg-gradient-to-b from-slate-800 to-zinc-800"
      >
        {/* About Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">About Us</h1>
          <p className="text-xl">
            <span className="font-bold">Welcome to Our Library!</span> <br />
            We are passionate about providing a wide range of books, resources,
            and services to our community. Our library is a place for everyone,
            whether you are an avid reader, a student, or just looking for a
            quiet space to relax. We offer a diverse collection of books,
            e-books, audiobooks, and more, catering to all ages and interests.
          </p>
          <p className="mt-6 text-xl leading-7 ">
            <span className="font-bold">Our Collection:</span> <br />
            <span className="font-semibold">- Fiction & Non-Fiction:</span> From
            timeless classics to the latest bestsellers, our shelves are filled
            with a variety of genres, including literary fiction, thrillers,
            romance, fantasy, historical fiction, and science fiction. <br />
            <span className="font-semibold">- Children's Books:</span> We have a
            wonderful selection of picture books, early readers, and young adult
            novels that will inspire creativity and a love of reading in
            children of all ages. <br />
            <span className="font-semibold">- Educational Resources:</span>{" "}
            Whether you're a student or lifelong learner, we provide academic
            resources across subjects like history, science, technology, and the
            arts. You’ll find textbooks, reference materials, and guides that
            support your learning journey. 
            <br />
            <span className="font-semibold">- Audiobooks & E-books:</span> In
            addition to physical books, we offer a large collection of
            audiobooks and e-books, available for download or streaming, so you
            can enjoy your favorite stories on the go. <br />
            <span className="font-semibold">- Special Collections:</span> Our
            library also features curated collections that celebrate diverse
            cultures, authors, and themes, including works by local authors,
            LGBTQ+ literature, and books exploring social justice and history.{" "}
            <br />
          </p>

          <p className="mt-6 text-xl leading-7 ">
            <span className="font-bold">Library Services:</span> <br />
            <span className="font-semibold">
              - Free Library Membership:
            </span>{" "}
            Sign up for a free library card and gain access to our entire
            collection, including borrowing privileges for books, audiobooks,
            e-books, and more. <br />
            <span className="font-semibold">- Research Assistance:</span> Need
            help with research? Our friendly and knowledgeable librarians are
            always available to assist with finding resources, conducting
            research, or recommending books for your next read. 
            <br />
            <span className="font-semibold">
              - Community Programs & Events:
            </span>{" "}
            We host a wide variety of events including author talks, book clubs,
            workshops, and children’s storytime sessions. Join us for regular
            events that foster creativity, learning, and community engagement.{" "}
            <br />
            <span className="font-semibold">- Online Resources:</span> Access
            our digital library from anywhere, anytime. From e-books and
            audiobooks to research databases and educational tools, our online
            resources are available 24/7. <br />
            <span className="font-semibold">- Quiet Study Areas:</span> Whether
            you need a quiet space to study, work on a project, or just read,
            our library offers peaceful study areas with free Wi-Fi and plenty
            of seating. <br />
            <span className="font-semibold">
              - Meeting Rooms & Events:
            </span>{" "}
            Need a space for a community meeting, group study, or event? We
            offer meeting rooms that can be reserved for public use. Whether
            it's a book club meeting or a workshop, we have you covered. <br />
          </p>
          <p className="mt-6 text-xl leading-7 ">
            <span className="font-bold">Why Choose Us?</span> <br />
            <span className="font-semibold">
              - Friendly and Supportive Environment:
            </span>{" "}
            Our library is more than just a place to check out books; it's a
            community hub where everyone is welcome. We’re here to provide
            support, whether you’re looking for your next great read or need
            help with research or homework. <br />
            <span className="font-semibold">
              - Inclusive and Accessible:
            </span>{" "}
            We strive to make our resources accessible to everyone. From
            large-print books to audiobooks and assistive technologies, we
            ensure that all members of our community can access and enjoy our
            services. <br />
            <span className="font-semibold">- Sustainable Practices:</span> We
            are committed to sustainability and offer eco-friendly options like
            digital book lending and paperless programs. We encourage our
            visitors to explore green initiatives, including book recycling and
            eco-conscious events. <br />
          </p>
          <p className="mt-6 text-xl leading-7 ">
            <span className="font-bold">Get Involved:</span> <br />
            <span className="font-semibold">- Volunteering:</span> Join our
            volunteer program and make a difference in the community. Whether
            you’re helping with events, organizing books, or assisting with
            programs, your support is always appreciated. <br />
            <span className="font-semibold">- Donations:</span> Help us expand
            our collection and continue offering high-quality resources to the
            community. Donations of books, monetary contributions, and other
            resources are always welcome. <br />
            <span className="font-semibold">- Library Membership:</span> Become
            a member today! Our library card is your gateway to thousands of
            books, educational resources, and exclusive events. <br />
          </p>
          <p className="mt-6 text-xl leading-7 ">
            We believe that books have the power to change lives, inspire new
            ideas, and build stronger communities. Whether you're here to borrow
            a book, attend an event, or simply enjoy a quiet moment, we are
            excited to have you as part of our library family. <br />
            <span className="font-bold">
              Visit us today and explore all the possibilities that await you!
            </span>
          </p>

          <p className="mt-4 text-xl">
            Our mission is to foster a love for reading and learning in all
            individuals by providing easy access to valuable knowledge and
            resources. We are committed to supporting lifelong learning in our
            community and offering a welcoming environment for everyone.
          </p>
        </div>

        {/* Contact Section */}
        <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-semibold text-center text-blue-500">
            Contact Us
          </h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl text-blue-400 material-icons">
                location_on
              </span>
              <p className="text-lg">
                123 Library St, Booktown, Knowledge City, 456789
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl text-blue-400 material-icons">
                email
              </span>
              <a href="mailto:weroshprofy@gmail.com">weroshprofy@gmail.com</a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl text-blue-400 material-icons">
                phone
              </span>
              <a href="tel:+94769696250">+94 76 9696250</a>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center mt-4 space-x-8">
              <a
                href="https://www.facebook.com/werosh.kriyanjala.3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700"
              >
                <i className="fab fa-facebook">
                  <FaFacebook />
                </i>
              </a>
              <a
                href="www.linkedin.com/in/werosh-kriyanjala-0318b1292"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700"
              >
                <i className="fab fa-twitter">
                  <IoLogoLinkedin />
                </i>
              </a>
              <a
                href="https://www.instagram.com/werosh_k/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700"
              >
                <i className="fab fa-instagram">
                  <RiInstagramFill />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;

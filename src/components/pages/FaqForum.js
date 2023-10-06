import React from "react";
import CommentForm from "../molecules/CommentFormMolecule";

const FaqForumForum = () => {
  return (
    <body>
      <div className="FaqForum">
        <p className="FoPlaceholderText">
          <h1 className="display">Welcome To The FAQ Forum</h1>
          <br></br>
          Welcome to our FAQ Forum! This platform is designed to provide a
          centralized space for users to ask and find answers to frequently
          asked questions on a wide range of topics. Whether you're seeking
          information about technology, science, entertainment, health, or any
          other subject, our forum is here to help. How does it work? It's
          simple! Users can submit their questions, and the community, including
          knowledgeable experts and enthusiasts, will share their expertise and
          insights by providing detailed answers. The forum encourages
          participation, collaboration, and the exchange of information among
          members.
        </p>
        <hr></hr>
        <p className="FoPlaceholderText">
          <h3>FAQ Forum Rules</h3>
          Before posting a question, we recommend using the search function to
          check if your query has already been addressed. Additionally, please
          take a moment to review the forum guidelines to ensure a positive
          experience for all participants. Join our FAQ Forum today and become
          part of a vibrant community where knowledge is shared, questions are
          answered, and learning never ends!
        </p>
        <hr></hr>
        <p className="FoPlaceholderText">
          <h3>What Happens during a Rescue?</h3>
          During an animal rescue, a dedicated team of professionals and
          volunteers work together to ensure the safety and well-being of
          animals in distress. Throughout the entire animal rescue process, the
          welfare and best interests of the animal remain the top priority. The
          aim is to provide them with a second chance at life, whether through
          rehabilitation, adoption, or release, while raising awareness about
          animal welfare and promoting responsible pet ownership.
          <hr></hr>
          <h5>Comments</h5>
          <h6>User1479</h6>
          What are some effective ways individuals can support and contribute to
          animal rescues?
          <h6>Forum Admin</h6>
          Any form of support including Appreciation and Donating is helpful!
          <br></br>
          <hr></hr>
          <CommentForm />
        </p>
      </div>
      <div className="Donations">
        <h4>Recent Donations</h4>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
      </div>
    </body>
  );
};

export default FaqForumForum;

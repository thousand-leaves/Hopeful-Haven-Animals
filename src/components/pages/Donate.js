import React from "react";
import DonateFormMolecule from "../molecules/DonateFormMolecule";

const Donate = () => {
  return (
    <body>
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
      <div className="DonateInfo">
        <p className="DonateInfoPara">
          <h3>Donation Information</h3>
          At our animal rescue charity, we prioritize transparency and
          accountability when it comes to the allocation of donations. We
          understand that your contributions are crucial in helping us fulfill
          our mission of rescuing and caring for animals in need. Here is a
          detailed breakdown of where your donations go:
          <br></br>
          Animal Rescue and Rehabilitation: The majority of your donations are
          allocated towards rescuing and rehabilitating animals in distress.
          This includes the cost of rescuing animals from dangerous situations,
          providing emergency medical care, sheltering and housing, feeding, and
          overall rehabilitation efforts. These funds ensure that animals
          receive the immediate attention they need, such as veterinary care,
          vaccinations, and proper nutrition, to regain their health and
          well-being.
          <br></br>
          Veterinary Care and Medical Expenses: A significant portion of the
          funds is dedicated to veterinary care and medical expenses for the
          animals in our care. This covers routine check-ups, vaccinations,
          spaying or neutering, microchipping, dental care, surgeries, and any
          ongoing medical treatments required for animals with chronic
          conditions or injuries. Our goal is to ensure that every animal
          receives high-quality medical care to recover and lead healthy lives.
          <br></br>
          Food, Shelter, and Daily Care: Your donations contribute to providing
          a safe and comfortable environment for the animals under our care.
          This includes maintaining and improving shelter facilities, purchasing
          bedding, food, and other necessary supplies to meet the daily needs of
          the animals. By allocating funds to these essentials, we can ensure
          that every animal has a warm and clean place to stay, along with
          nutritious meals to support their well-being.
          <br></br>
          Educational and Outreach Initiatives: Our commitment to animal welfare
          goes beyond rescue and care. Your donations also enable us to conduct
          educational programs and outreach initiatives to raise awareness about
          responsible pet ownership, animal welfare, and the importance of
          spaying/neutering. These initiatives aim to prevent future animal
          suffering by empowering the community with knowledge and resources.
          <br></br>
          We understand the significance of your donations and are committed to
          using them efficiently and effectively to make a positive impact on
          the lives of animals in need. Our organization regularly reviews and
          assesses the allocation of funds to ensure maximum transparency and
          accountability. We provide detailed financial reports and updates to
          our donors, allowing you to see firsthand how your contributions are
          making a difference. Together, we can continue to rescue,
          rehabilitate, and provide a better future for the animals that rely on
          our support.
        </p>
      </div>
      <div className="DonateForm">
        <DonateFormMolecule />
      </div>
    </body>
  );
};

export default Donate;

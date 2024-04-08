import { formatDistance } from "date-fns";
import profilesData from "../profileData";

const profile = (profileData) => {
  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container";

  const profileImageContainer = document.createElement("div");
  profileImageContainer.classList.add("profile-image-container");

  const profileImage = document.createElement("img");
  profileImage.className = "profile-image";
  profileImage.src = profileData.profilePicture;

  profileImageContainer.appendChild(profileImage);

  const profileNameAndLastMessageContainer = document.createElement("div");
  profileNameAndLastMessageContainer.className =
    "profile-name-and-last-message";

  const profileName = document.createElement("h2");
  profileName.className = "profile-name";
  profileName.textContent = profileData.name;

  const profileLastMessage = document.createElement("div");
  profileLastMessage.className = "profile-last-message";
  profileLastMessage.textContent = profileData.lastMessage;

  profileNameAndLastMessageContainer.appendChild(profileName);
  profileNameAndLastMessageContainer.appendChild(profileLastMessage);

  const lastMessageTime = document.createElement("div");
  lastMessageTime.className = "profile-last-message-time";
  lastMessageTime.textContent =
    formatDistance(new Date(profileData.lastMessageTime), new Date()).replace(
      "about",
      ""
    ) + " ago";

  profileContainer.appendChild(profileImageContainer);
  profileContainer.appendChild(profileNameAndLastMessageContainer);
  profileContainer.appendChild(lastMessageTime);

  return profileContainer;
};

const profiles = (profilesData) => {
  console.log(profilesData);
  const profilesContainer = document.createElement("div");
  profilesContainer.className = "profiles-container";

  profilesData.forEach((profileData) => {
    profilesContainer.appendChild(profile(profileData));
  });

  return profilesContainer;
};

const addProfiles = (content) => {
  content.appendChild(profiles(profilesData));
};

export default addProfiles;

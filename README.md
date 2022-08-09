
# cs2001-2021_22-group50-2021
cs2001-2021_22-group50-2021 created by GitHub Classroom


![image](https://user-images.githubusercontent.com/73062879/155819954-c5e89ee2-647b-44cb-a412-aa33dbf19d70.png)

## Figma design : https://www.figma.com/file/nD5cQzbQAUDm2dpwYPwoh9/TechDonate?node-id=0%3A1

---

## Group number : 50

---

### Group Members

Name | Student ID | Feature Contribution |
-----|------------|--------------|
Ahmed Alkhazraji | 2045016 | Finish email (40%) – till next meeting  , Contact info once device has been accepted , Verify email page ( nawal also ) |
Alek Rifai | 2033603 | Back-end: Fully functional account system, users can register, login, persistent storage of user-related information, user register, login, logout, updatesettings, delete account API enpoints, testing of backend functionalities |
Nawal Malik | 1934729 | Set donation preferences , View offered device (Accept / Decline buttons as well)|
Nusrat Keyka | 1843832 | List new device page ,  View device you've listed , Update device  , Connect to the back end. | connect to database|
Philipp Bibik | 1943513 | Back-end: REST API documentation, DB interface, queue system, all student / donor specific conrollers & endpoints, majority of system and object design, API unit testing, component testing; Front-end: preferences page, view & remove listed devices, view & accept & decline offered devices, back-end interfaces & integration |
Thoybur Rohman | 2026156 | Back-end: REST API documentation, Controller class set up , CORS configuration , SMTP email . Testing Back End , Front-end : dynamic navBar  , Login page , Registartion page , Upload device page , Home page , Front end structure . Post man peer testing and Testing Front end.|

---

## Project Idea

### UN Sustainable development goal number: 4 (education) & 10 (reduced inequalities)

### Motivation: To help as many students get a better quality of education

### Features:
- Students, organizations, and individuals can create an account
- Students can enter required personal information & select which electronics they need
- Organizations and individuals can list technological items for donation
- A queue system to allow a fair wait time for laptops on a first come first serve basis
- Students are informed per email once a device has been offered to them
- A person can only apply once and the app will tell us if they received their device or not


## Technologies

1. Back-end: Spring
2. Front-end: ReactJS
3. Database: MongoDB
4. Testing: Junit, Manual, Postman

## Deployment
- Create a MongoDB deployment, local or in the cloud
- Install a Java JDK with Maven support and NodeJS
- Build and run the back-end, which will create a file at `~/.techdon/pref.json`
- Fill in valid MongoDB and SMTP Server credentials
- Start the server again, which should now succeed
- Go to the `front-end` folder in a terminal and run `npm install`
- You can now run `npm start`, which should launch the front-end on `localhost:3000`
- If you chose to deloy the instance, route port 3000 to 8000 and attach an A record to your domain's DNS

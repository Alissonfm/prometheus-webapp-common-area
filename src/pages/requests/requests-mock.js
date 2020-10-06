
const avatarProps = {
    className: 'menu--avatar',
    theme: 'dark',
    name: 'Augusto Lima',
    imageSrc: '../../assets/img/user-test.jpg',
  };

const REQUESTS = [
    { id: `T1000-${Math.random()}`, requester: avatarProps , grade: 'T1000', type: 'test-validation', date: '06/10/2020', assingment: 'Alune', status: 'open'},
    { id: `T2000-${Math.random()}`, requester: avatarProps , grade: 'T2000', type: 'test-validation', date: '06/10/2020', assingment: 'Alune', status: 'waiting'},
    { id: `T3000-${Math.random()}`, requester: avatarProps , grade: 'T3000', type: 'test-second-chance', date: '06/10/2020', assingment: 'Alune', status: 'done'},
    { id: `T4000-${Math.random()}`, requester: avatarProps , grade: 'T4000', type: 'special-need', date: '06/10/2020', assingment: 'Alune', status: 'dispatched'},
];

export default REQUESTS;
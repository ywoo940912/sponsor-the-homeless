export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "location",
    headerName: "location",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithlocation ${params.row.location}`}>
          {params.row.location}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Shane Johnson",
    img: "https://images.pexels.com/photos/35011/people-peoples-homeless-male.jpg",
    location: "Atlanta",
    email: "bmeeks@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Fuqua",
    img: "https://images.pexels.com/photos/8078381/pexels-photo-8078381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "fuquaJ@gmail.com",
    location: "Marietta",
    age: 42,
  },
  {
    id: 3,
    username: "Jannik Muller",
    img: "https://media.istockphoto.com/id/1310574232/photo/homlessness.jpg?s=1024x1024&w=is&k=20&c=yQA-XIr221h3rJEtrh15idkG9mdZkZ8guQZYssA69FI=",
    email: "sobrero@hotmail.com",
    location: "Kennesaw",
    age: 45,
  },
  {
    id: 4,
    username: "Sonny Chan",
    img: "https://images.pexels.com/photos/14499325/pexels-photo-14499325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "gen52456@gmail.com",
    location: "Marietta",
    age: 16,
  },
  {
    id: 5,
    username: "Abidal Enduja",
    img: "https://media.istockphoto.com/id/1432209325/photo/portrait-of-a-mature-man-at-a-community-center.jpg?s=1024x1024&w=is&k=20&c=5_gf-0nY999f8uTcI7NAqFaPile_6phoGLACeRnOvNE=",
    email: "5snow@gmail.com",
    location: "Kennesaw",
    age: 22,
  },
];
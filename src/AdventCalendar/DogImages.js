import React from "react";

const DogImages = () => {
  const names = [
    "小济", "善良摇粒绒", "小布", "小德", "小蒲", "大金毛", "大伯", "八哥", "Fluffy", "佩佩",
    "宅宅", "索洛", "Simone", "妮妮", "小白", "大白", "查理", "多多", "邱邱", "栗子",
    "Molly", "Asher", "小德警官", "404"
  ]
  const dogs = [];
  for (let i = 1; i <= 24; i++) {
    dogs.push({
      name:names[i-1],
      imageUrl: `/images/Puppy_day${i}.png`, // Replace with actual image path
    });
  }

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "100px", // Space between sections
      }}
    >
      <hr style={{ margin: "20px 0", borderTop: "2px solid #ddd" }} /> {/* Divider */}
      
      <h2 style={{ textAlign: "center", color:"white" }}>礼物大使</h2>
      
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {dogs.map((dog) => (
          <div key={dog.id} style={{ margin: "0px", textAlign: "center" , color:"white"  }}>
            <img
              src={dog.imageUrl}
              alt={dog.name}
              style={{ width: "200px", height: "auto", borderRadius: "10px" }}
            />
            <p style={{ marginTop: "-30px", marginBottom:"50px", fontSize: "20px"}}>{dog.name}</p> {/* Display the puppy's name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogImages;

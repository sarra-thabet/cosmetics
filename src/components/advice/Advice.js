import React from "react";
import { Header } from "../../global/header/Header";
import "./Advice.css";
import { Highlight, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Card, CardBody, CardFooter,Stack ,Image ,Text,Divider,Button,ButtonGroup, Center} from "@chakra-ui/react";
export const Advice = () => {
  const [selectedSkinType, setSelectedSkinType] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleButtonClick = async (skinType) => {
    setSelectedSkinType(skinType);
    setLoading(true);
    try {
      console.log(selectedSkinType);
      const response = await axios.post(
        `http://localhost:5000/api/recepes/search?key=${skinType}`
      );
      console.log(response.data); // Handle the response data as needed
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <div className="advice">
      <Header />
      <p className="poetsen-one-regular">
        <Heading lineHeight="tall">
          <Highlight
            query="Skin"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Welcome, Beautiful! Let's find the perfect recipes for your lovely
            skin, Please Choose Your Skin Type below !
          </Highlight>
        </Heading>
      </p>
      <div className="skintype">
        <button
          class="btnn"
          type="button"
          onClick={() => handleButtonClick("oily")}
        >
          <strong>Oily Skin</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
        <button
          class="btnn"
          type="button"
          onClick={() => handleButtonClick("dry")}
        >
          <strong>Dry Skin</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
      </div>
      <div className="result">
        {loading && <p>Loading...</p>}
        {recipes.length > 0 && (
          <div className="recipes">
            <Heading size="md" mt={10}>
              <p className="poetsen-one-regular fs-20">
                Recipes for {selectedSkinType} Skin
              </p>
            </Heading>

            <ul>
              <div className="recipe">
                {recipes.map((recipe, index) => (
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    m={5}
                  >
                    <Image 
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src={`images/${recipe.image}`}
                      alt="recepie image"
                    />

                    <Stack>
                      <CardBody>
                        <Heading size="md">{recipe.name}</Heading>

                        <Text py="2">
                         {recipe.description}
                        </Text>
                      </CardBody>

                      <CardFooter>
                      </CardFooter>
                    </Stack>
                  </Card>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

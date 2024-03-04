// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/material";

// export default function MediaCard() {
//   return (
//     <Box>
//       <Card
//         sx={{
//           maxWidth: 345,
//           // paddingBottom: "20px",
//         }}
//       >
//         <Box>
//           <CardMedia
//             sx={{ height: 200 }}
//             image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2d280f6-a1b3-44e1-b40b-3277f47ff588/air-max-plus-womens-shoes-47Sxw5.png"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Nike Air Max Plus
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               In 1979, former NASA engineer Frank Rudy developed Air technology
//               for Nike. The shock-absorbing properties were superior to
//               competitors, but buyers found it difficult to pay $100 for
//               sneakers that looked no different. Tinker Hatfield saved the day
//               by designing the Air Max 1 in 1987.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button sx={{ color: "black" }} size="small">
//               About
//             </Button>
//             <Button sx={{ color: "black" }} size="small">
//               Buy
//             </Button>
//           </CardActions>
//         </Box>

//         <Box>
//           <CardMedia
//             sx={{ height: 200 }}
//             image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Blazer
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Powerful collaborations based on the Nike Blazer have been coming
//               out since the early 2000s. The artist Futura was among the first
//               to be noted - in 2003 he created his own Nike Blazer, the
//               circulation of which was only 1000 pairs.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button sx={{ color: "black" }} size="small">
//               About
//             </Button>
//             <Button sx={{ color: "black" }} size="small">
//               Buy
//             </Button>
//           </CardActions>
//         </Box>

//         <Box>
//           {" "}
//           <CardMedia
//             sx={{ height: 200 }}
//             image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0f58014-e49e-4757-adc6-ef627ae13fa4/air-jordan-4-retro-se-craft-big-kids-shoes-fs3w1b.png"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jordan 4
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               In the era of collaborations, we are accustomed to the factthat
//               every outstanding rapper has his own model of sneakers or, at
//               worst, a clothing line. In the late 80s it was difficult toeven
//               dream about this.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button sx={{ color: "black" }} size="small">
//               About
//             </Button>
//             <Button sx={{ color: "black" }} size="small">
//               Buy
//             </Button>
//           </CardActions>
//         </Box>

//         <Box>
//           <CardMedia
//             sx={{ height: 200 }}
//             image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_537,c_limit/172e274c-b992-4deb-b886-b177514c751c/dunk-low-retro-premium-mens-shoes-RZwzsC.png"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Nike Dunk Low Retro Premium
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               The Nike Dunk is one of the most popular sneakers on the market
//               today. The Dunk's versatility and simplicity have made it a
//               must-have for anyone looking for a stylish everyday sneaker.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button sx={{ color: "black" }} size="small">
//               About
//             </Button>
//             <Button sx={{ color: "black" }} size="small">
//               Buy
//             </Button>
//           </CardActions>
//         </Box>
//       </Card>
//     </Box>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function MediaCard() {
  return (
    <Grid container spacing={2} sx={{ margin: "0 auto", width: "100%" }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2d280f6-a1b3-44e1-b40b-3277f47ff588/air-max-plus-womens-shoes-47Sxw5.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nike Air Max Plus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In 1979, former NASA engineer Frank Rudy developed Air technology
              for Nike. The shock-absorbing properties were superior to
              competitors, but buyers found it difficult to pay $100 for
              sneakers that looked no different.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Blazer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Powerful collaborations based on the Nike Blazer have been coming
              out since the early 2000s. The artist Futura was among the first
              to be noted - in 2003 he created his own Nike Blazer, the
              circulation of which was only 1000 pairs.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0f58014-e49e-4757-adc6-ef627ae13fa4/air-jordan-4-retro-se-craft-big-kids-shoes-fs3w1b.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jordan 4
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In the era of collaborations, we are accustomed to the factthat
              every outstanding rapper has his own model of sneakers or, at
              worst, a clothing line. In the late 80s it was difficult to even
              dream about this.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_537,c_limit/172e274c-b992-4deb-b886-b177514c751c/dunk-low-retro-premium-mens-shoes-RZwzsC.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nike Dunk Retro Premium
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Nike Dunk is one of the most popular sneakers on the market
              today. The Dunk's versatility and simplicity have made it a
              must-have for anyone looking for a stylish everyday sneaker.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {" "}
              Neki Air Forcw 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Designed by Bruce Kilgore and introduced in 1982, the Air Force 1
              was the first basketball shoe to feature Nike Air technology,
              forever changing the culture of the game and sneakers. More than
              three decades since its initial release.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f616567d-bbfa-49aa-8d50-22b754bfcd61/killshot-2-leather-shoes-Xp4rM5.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {" "}
              Nike Killshot 2 Leather
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Nike Killshot may have the strangest story in the brand's
              archives. The model came out in 1979, just 7 years after Nike was
              founded, and was designed for racquetball and squash. The low-cut
              design allowed for a lot of movement.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/v2k-run-shoes-KWwRP4.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {" "}
              Nike CA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It all started with a Crazy Idea - a 24-year-old boy from Oregon's
              dream to change lives and leave his mark on history. Phil Knight,
              a young Stanford graduate, borrowed a couple hundred dollars from
              his father.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b192ae51-f41f-4129-987e-b750da4ebd06/sb-react-leo-skate-shoes-0x1mSH.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {" "}
              Nike SB React Leo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Luxury and practicality come together in this genderless
              collaboration with Leo Baker. Designed for effortless walking with
              next-level precision, these running shoes wear perfectly for
              longer, more consistent performance.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="big">
              About
            </Button>
            <Button sx={{ color: "black" }} size="big">
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

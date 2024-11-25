import { Img, Layout, Line, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import {
  all,
  beginSlide,
  createRef,
  PossibleVector2,
  Reference,
  SignalValue,
  waitFor,
} from "@motion-canvas/core";

import VScouterLogoImage from "../media/VScouterLogo.png";

export default makeScene2D(function* (view) {
  var green = "B2F2BB";
  var yellow = "FFEC99";
  var blue = "A5D8FF";

  const background = createRef<Rect>();
  view.add(generateRect(1920, 1080, yellow, background, 0, 0, [], 0));

  const scoutingMessage = createRef<Rect>();
  view.add(
    generateRect(1204.93, 407.5, green, scoutingMessage, 0, 0, [
      generateText("Scouting!", 100),
    ])
  );

  const scoutingFlowChart = createRef<Rect>();
  view.add(
    generateRect(1845.4, 600.14, green, scoutingFlowChart, 0, 501 + 600.14, [
      generateRect(527.07, 356.81, blue, undefined, -613.62),
      generateText("Data Collection", 40, -613.62, 0),
      generateArrow([
        [-613.62 + 527.07 / 2, 0],
        [0 - 527.07 / 2, 0],
      ]),

      generateRect(527.07, 356.81, blue, undefined, 0),
      generateText("Parsing", 40, 0, 0),
      generateArrow([
        [0 + 527.07 / 2, 0],
        [613.62 - 527.07 / 2, 0],
      ]),

      generateRect(527.07, 356.81, blue, undefined, 613.62),
      generateText("Analysis", 40, 613.62, 0),
      generateArrow([
        [613.62, 89.76 * 2],
        [613.62, 0 + 527.07 / 2],
        [-613.62, 0 + 527.07 / 2],
        [-613.62, 89.76 * 2],
      ]),

      generateArrow([
        [0, -364.95],
        [0, -300.43],
      ]),
    ])
  );

  yield* beginSlide("Scouting Flowchart");
  yield* all(
    scoutingMessage().width(788.93, 1),
    scoutingMessage().height(266.81, 1),
    scoutingMessage().y(-368.5, 1),
    scoutingFlowChart().y(129.86, 1)
  );

  const vscouterLogo = createRef<Img>();
  view.add(
    <Img
      src={VScouterLogoImage}
      ref={vscouterLogo}
      x={937.93 + 814.87}
      width={814.87}
      height={814.87}
    />
  );

  yield* beginSlide("Scouting To VScouter");
  yield* all(
    scoutingFlowChart().y(1204.93, 1),
    scoutingMessage().x(-505.78, 1),
    scoutingMessage().y(-374.98, 1),
    vscouterLogo().x(435.53, 1)
  );
  scoutingFlowChart().remove();

  const vscouterLogoArrow = createRef<Line>();
  view.add(
    generateArrow(
      [
        [-488.73, -237.32],
        [-488.73, 0],
        [20, 0],
      ],
      vscouterLogoArrow
    )
  );

  const vscouterDescription = createRef<Rect>();
  view.add(
    generateRect(872.5, 814.87, blue, vscouterDescription, 960.77+440.78, 0, [
      generateText(
        `- Data collection though a website found at \nhttps://vscouter.netlify.app/\n\n - Scouting can be done offline in \nenvironments with no internet\n\n- Auto completion to make selecting teams \nto scout easier\n\n- USB flash drive data collection process`,
        43, 
        0,
        0
      ),
    ])
  );

  yield* beginSlide("VScouter Explanation");
  yield* all(
    scoutingMessage().x(-960.77 - 788.93, 1),
    vscouterLogoArrow().x(-960.77 - 788.93, 1),
    vscouterLogo().x(-447.44, 1),
    vscouterDescription().x(440.78, 1)
  );
  vscouterLogoArrow().remove();
  scoutingMessage().remove();

  const dataCollectionDemo = createRef<Rect>();
  view.add(
    generateRect(825, 377.76, blue, dataCollectionDemo, 0, -654.07-377.76, [
      generateText("Data Collection Demo", 75),
    ])
  );

  yield* beginSlide("Data Collection Demo");
  yield* all(
    vscouterLogo().x(-959.23-814.87, 1),
    vscouterDescription().x(960.77+440.78, 1),
    dataCollectionDemo().y(0, 1)
  )
  vscouterLogo().remove()
  vscouterDescription().remove()


  const leftParsingFlowChart = createRef<Layout>();
  view.add(
    <Layout ref={leftParsingFlowChart} x={-979.95}>
      {generateRect(380, 200, green, undefined, -669.95, -301.92, [
        generateText("Red Scouter 1", 45)
      ])}
      {generateRect(380, 200, green, undefined, -669.95, 0, [
        generateText("Red Scouter 2", 45)
      ])}
      {generateRect(380, 200, green, undefined, -669.95, 301.92, [
        generateText("Red Scouter 3", 45)
      ])}
      {generateArrow([[-479.95, -301.92], [-230, -75]])}
      {generateArrow([[-479.95, 0], [-230, 0]])}
      {generateArrow([[-479.95, 301.92], [-230, 75]])}
    </Layout>
  );

  const rightParsingFlowChart = createRef<Layout>();
  view.add(
    <Layout ref={rightParsingFlowChart} x={979.95}>
      {generateRect(380, 200, green, undefined, 669.95, -301.92, [
        generateText("Blue Scouter 1", 45)
      ])}
      {generateRect(380, 200, green, undefined, 669.95, 0, [
        generateText("Blue Scouter 2", 45)
      ])}
      {generateRect(380, 200, green, undefined, 669.95, 301.92, [
        generateText("Blue Scouter 3", 45)
      ])}
      {generateArrow([[479.95, -301.92], [230, -75]])}
      {generateArrow([[479.95, 0], [230, 0]])}
      {generateArrow([[479.95, 301.92], [230, 75]])}
    </Layout>
  );

  yield* beginSlide("Data Collection Demo");
  yield* all(
    dataCollectionDemo().y(654.07+377.76, 1),
    leftParsingFlowChart().x(0, 1),
    rightParsingFlowChart().x(0, 1),
  )
  dataCollectionDemo().remove()

  const centerParsingFlowChart = createRef<Rect>();
  view.add(
    generateRect(455, 420, blue, centerParsingFlowChart, 0, -541.46-(420/2), [
      generateText("Server", 65),
    ])
  )

  yield* beginSlide("Parsing Flowchart P2");
  yield* all(
    centerParsingFlowChart().y(0, 1)
  )

  yield* beginSlide("Ways To Transfer Data");
  yield* all(
    leftParsingFlowChart().y(540+(800/2), 1),
    rightParsingFlowChart().y(540+(800/2), 1),
    centerParsingFlowChart().y(540+(800/2), 1),
  )
  leftParsingFlowChart().remove()
  rightParsingFlowChart().remove()
  centerParsingFlowChart().remove()

  yield* beginSlide("-");
});


function generateRect(
  width: number,
  height: number,
  fill: string,
  ref?: Reference<Rect>,
  x?: number,
  y?: number,
  children?: Node[],
  radius?: number
) {
  return (
    <Rect
      ref={ref}
      width={width}
      height={height}
      x={x}
      y={y}
      fill={fill}
      radius={radius !== undefined ? radius : 60}
      stroke={"black"}
      lineWidth={5}
    >
      {children && children}
    </Rect>
  );
}

function generateText(
  text: string,
  fontSize: number,
  x?: number,
  y?: number,
) {
  return (
    <Txt
      x={x}
      y={y}
      fontSize={fontSize}
      fontFamily={"Bahnschrift"}
      text={text}
    />
  );
}

function generateArrow(
  points: SignalValue<SignalValue<PossibleVector2>[]>,
  ref?: Reference<Line>
) {
  return (
    <Line ref={ref} stroke={"black"} lineWidth={5} points={points} endArrow />
  );
}

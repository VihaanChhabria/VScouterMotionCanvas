import {
  Img,
  Layout,
  Line,
  makeScene2D,
  Node,
  Rect,
  Txt,
} from "@motion-canvas/2d";
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
import PowerBIImage from "../media/PowerBIImage.svg";

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
    generateRect(872.5, 814.87, blue, vscouterDescription, 960.77 + 440.78, 0, [
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
    generateRect(825, 377.76, blue, dataCollectionDemo, 0, -654.07 - 377.76, [
      generateText("Data Collection Demo", 75),
    ])
  );

  yield* beginSlide("Data Collection Demo");
  yield* all(
    vscouterLogo().x(-959.23 - 814.87, 1),
    vscouterDescription().x(960.77 + 440.78, 1),
    dataCollectionDemo().y(0, 1)
  );
  vscouterLogo().remove();
  vscouterDescription().remove();

  const leftParsingFlowChart = createRef<Layout>();
  view.add(
    <Layout ref={leftParsingFlowChart} x={-979.95}>
      {generateRect(380, 200, green, undefined, -669.95, -301.92, [
        generateText("Red Scouter 1", 45),
      ])}
      {generateRect(380, 200, green, undefined, -669.95, 0, [
        generateText("Red Scouter 2", 45),
      ])}
      {generateRect(380, 200, green, undefined, -669.95, 301.92, [
        generateText("Red Scouter 3", 45),
      ])}
      {generateArrow([
        [-479.95, -301.92],
        [-230, -75],
      ])}
      {generateArrow([
        [-479.95, 0],
        [-230, 0],
      ])}
      {generateArrow([
        [-479.95, 301.92],
        [-230, 75],
      ])}
    </Layout>
  );

  const rightParsingFlowChart = createRef<Layout>();
  view.add(
    <Layout ref={rightParsingFlowChart} x={979.95}>
      {generateRect(380, 200, green, undefined, 669.95, -301.92, [
        generateText("Blue Scouter 1", 45),
      ])}
      {generateRect(380, 200, green, undefined, 669.95, 0, [
        generateText("Blue Scouter 2", 45),
      ])}
      {generateRect(380, 200, green, undefined, 669.95, 301.92, [
        generateText("Blue Scouter 3", 45),
      ])}
      {generateArrow([
        [479.95, -301.92],
        [230, -75],
      ])}
      {generateArrow([
        [479.95, 0],
        [230, 0],
      ])}
      {generateArrow([
        [479.95, 301.92],
        [230, 75],
      ])}
    </Layout>
  );

  yield* beginSlide("Parsing Flowchart P1");
  yield* all(
    dataCollectionDemo().y(654.07 + 377.76, 1),
    leftParsingFlowChart().x(0, 1),
    rightParsingFlowChart().x(0, 1)
  );
  dataCollectionDemo().remove();

  const centerParsingFlowChart = createRef<Rect>();
  view.add(
    generateRect(455, 420, blue, centerParsingFlowChart, 0, -541.46 - 420 / 2, [
      generateText("Server", 65),
    ])
  );

  yield* beginSlide("Parsing Flowchart P2");
  yield* all(centerParsingFlowChart().y(0, 1));

  const typesOfTransfer = createRef<Layout>();
  view.add(
    <Layout x={954.98+(1799.98/2)} ref={typesOfTransfer}>
      {generateText("Ways To Transfer Data", 100, 0, -401.85)}

      {generateTypeOfTransfer(
        -615,
        75,
        blue,
        green,
        "Bluetooth",
        "- Offline Data Sharing\n- Contactless",
        "- Small Max Bandwidth\n- Device Pairing Challenges\n- Compatibility Limitations"
      )}
      {generateTypeOfTransfer(
        0,
        75,
        blue,
        green,
        "Flash Drives",
        "- Offline Data Sharing\n- Large Bandwidth\n- Reliable\n- Universally Compatible",
        "- Manual Process\n- Lack of Automation\n- No Real-Time Updates",
        "green"
      )}
      {generateTypeOfTransfer(
        615,
        75,
        blue,
        green,
        "QR Codes",
        "- Offline Data Sharing\n- Quick Data Sharing\n- Universally Compatible\n- Cost-Effective",
        "- Smaller Max Bandwidth\n- Manual Process\n- No Real-Time Updates\n- Possibility of Data Splits",
        "yellow"
      )}
    </Layout>
  );

  yield* beginSlide("Ways To Transfer Data");
  yield* all(
    leftParsingFlowChart().y(540 + 800 / 2, 1),
    rightParsingFlowChart().y(540 + 800 / 2, 1),
    centerParsingFlowChart().y(540 + 800 / 2, 1),
    typesOfTransfer().x(0, 1)
  );
  leftParsingFlowChart().remove();
  rightParsingFlowChart().remove();
  centerParsingFlowChart().remove();

  const parseDataDemo = createRef<Rect>();
  view.add(
    generateRect(825, 377.76, blue, parseDataDemo, 0, -654.07 - 377.76, [
      generateText("Parsing Data Demo", 75),
    ])
  );

  yield* beginSlide("Parsing Data Demo");
  yield* all(
    parseDataDemo().y(0, 1),
    typesOfTransfer().x(-954.98-(1799.98/2), 1)
  )
  typesOfTransfer().remove()

  const analysisToPowerBI = createRef<Layout>();
  view.add(
    <Layout ref={analysisToPowerBI} x={-959.58-(1568.5/2)}>
      {generateRect(605.18, 301.1, blue, undefined, -447.08, 0, [
        generateText("Analysis", 75),
      ])}
      {generateArrow([
        [-139.49, 0],
        [144.49, 0]
      ])}
    </Layout>
  )

  const powerBIImageRef = createRef<Img>();
  view.add(
    <Img
        ref={powerBIImageRef}
        src={PowerBIImage}
        width={630}
        height={630}
        x={-960-(630/2)}
        y={0}
      />
  )

  yield* beginSlide("Analysis P1");
  yield* all(
    parseDataDemo().y(654.07 + 377.76, 1),
    powerBIImageRef().x(481.66, 1),
    analysisToPowerBI().x(0, 1)
  )
  parseDataDemo().remove();

  const powerBIDescription = createRef<Rect>();
  view.add(
    generateRect(872.5, 814.87, blue, powerBIDescription, 960.77 + 440.78, 0, [
      generateText(
        `- An analytics tool developed by Microsoft \nthat enables users to visualize data and \ncreate interactive reports.\n\n- Has the ability to import data from \nsources like databases, Excel, and CSV files\n\n- Free for personal use`,
        43,
        0,
        0
      ),
    ])
  );

  yield* beginSlide("Analysis P2");
  yield* all(
    analysisToPowerBI().x(-999.92-(894.17/2), 1),
    powerBIImageRef().x(-447.5, 1),
    powerBIDescription().x(440.78, 1)
  )
  analysisToPowerBI().remove()

  const analysisDemo = createRef<Rect>();
  view.add(
    generateRect(825, 377.76, blue, analysisDemo, 0, -654.07 - 377.76, [
      generateText("Analysis Demo", 75),
    ])
  );

  yield* beginSlide("Analysis Demo");
  yield* all(
    powerBIImageRef().x(-960-(630/2), 1),
    powerBIDescription().x(960+(872.5/2), 1),
    analysisDemo().y(0, 1)
  )
  powerBIImageRef().remove();
  powerBIDescription().remove();

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

function generateText(text: string, fontSize: number, x?: number, y?: number) {
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

function generateTypeOfTransfer(
  x: number,
  y: number,
  largeFill: string,
  smallFill: string,
  typeOfTransfer: string,
  pros: string,
  cons: string,
  important?: string
) {
  return (
    <Rect
      width={530}
      height={685}
      x={x}
      y={y}
      fill={largeFill}
      radius={60}
      stroke={
        important == "green"
          ? "2F9E44"
          : important == "yellow"
          ? "FAB005"
          : "black"
      }
      lineWidth={important == "green" ? 30 : important == "yellow" ? 30 : 5}
    >
      {generateText(typeOfTransfer, 65, 0, -270)},
      {generateRect(430, 238.04, smallFill, undefined, 0, -100, [
        generateText("Pros", 45, 0, -75),
        generateText(pros, 30, 0, 20),
      ])}
      ,
      {generateRect(430, 238.04, smallFill, undefined, 0, 175, [
        generateText("Cons", 45, 0, -75),
        generateText(cons, 30, 0, 20),
      ])}
    </Rect>
  );
}

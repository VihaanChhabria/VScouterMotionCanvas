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
  chain,
  createRef,
  PossibleVector2,
  Reference,
  SignalValue,
  waitFor,
} from "@motion-canvas/core";

import VScouterLogoImage from "../media/VScouterLogo.png";
import PowerBIImage from "../media/PowerBIImage.svg";
import FRCFieldImage from "../media/FRCField.png";
import VihaanLinkTreeImage from "../media/VihaanLinkTree.png";
import FRCLogo from "../media/FRCLogo.png";
import InternetIcon from "../media/InternetIcon.png";
import WifiIcon from "../media/WifiIcon.png";
import AutoCompletionImage from "../media/AutoCompletionImage.png";
import FlashDriveImage from "../media/FlashDrive.png";
import WirelessIcon from "../media/WirelessIcon.png";
import FileIcon from "../media/FileIcon.png";
import AppleIcon from "../media/AppleLogo.png";
import XIcon from "../media/RedX.png";
import ShieldIcon from "../media/ShieldIcon.png";
import TimeIcon from "../media/TimeIcon.png";

import { getColors } from "../defaults";

export default makeScene2D(function* (view) {
  var colors = getColors();
  var colorOne = colors[0]; //"FFD6CC";
  var colorBackground = colors[1]; //"FFF3B0";
  var colorTwo = colors[2]; //"CFEAFF";

  const background = createRef<Rect>();
  view.add(generateRect(1920, 1080, colorBackground, background, 0, 0, [], 0));

  const presentationIntro = createRef<Txt>();
  view.add(
    generateText(
      "Big News In FRC This Year!",
      10,
      0,
      0,
      undefined,
      presentationIntro
    )
  );

  yield* chain(
    presentationIntro().fontSize(160, 0.5),
    presentationIntro().fontSize(130, 0.25)
  );

  const FRCLogoRef = createRef<Img>();
  view.add(
    <Img
      src={FRCLogo}
      ref={FRCLogoRef}
      width={900}
      x={960 + 1250 / 2}
      y={100}
    />
  );

  yield* beginSlide("Whats FRC");
  yield* all(
    FRCLogoRef().x(0, 1),
    presentationIntro().text("What is FRC?", 1),
    presentationIntro().y(-375, 1)
  );

  const FRCFieldRef = createRef<Img>();
  const alliance1 = createRef<Rect>();
  view.add(
    <Img
      src={FRCFieldImage}
      ref={FRCFieldRef}
      width={669 * 2.5}
      height={296 * 2.5}
      x={960 + (669 * 2.5) / 2}
    >
      {[
        [384, -230],
        [135, -230],
        [-148, -230],
        [-431, -230],
        [-431, 200],
        [-148, 200],
        [135, 200],
        [384, 200],
      ].map((coord, index) =>
        index == 0
          ? generateRect(
              100,
              100,
              colorTwo,
              alliance1,
              coord[0],
              coord[1],
              [generateText(String(index + 1), 40)],
              20
            )
          : generateRect(
              100,
              100,
              colorTwo,
              undefined,
              coord[0],
              coord[1],
              [generateText(String(index + 1), 40)],
              20
            )
      )}
    </Img>
  );

  const notPickedTeams = createRef<Layout>();
  const alliance1Pick = createRef<Rect>();
  view.add(
    <Layout ref={notPickedTeams} x={960 + 850}>
      {[...Array(8)].map((_, index) =>
        index == 0
          ? generateRect(
              80,
              80,
              colorOne,
              alliance1Pick,
              0 - 115 * index,
              440,
              [],
              20
            )
          : generateRect(
              80,
              80,
              colorOne,
              undefined,
              0 - 115 * index,
              440,
              [],
              20
            )
      )}
      ,
      {[...Array(8)].map((_, index) =>
        generateRect(80, 80, colorOne, undefined, 0 + 115 * index, 440, [], 20)
      )}
    </Layout>
  );

  const alliancePickTimer = createRef<Txt>();
  view.add(
    generateText("0:45", 75, -130, -452.65 - 150, "red", alliancePickTimer)
  );

  yield* waitFor(1);
  yield* beginSlide("Intro");
  yield* all(
    presentationIntro().y(1000, 1),
    FRCFieldRef().x(0, 1),
    notPickedTeams().x(0, 1),
    FRCLogoRef().x(-960 - 1250 / 2, 1)
  );
  FRCLogoRef().remove();
  presentationIntro().remove();

  yield* waitFor(1);
  yield* beginSlide("Alliance Selection Changes");
  yield* all(
    alliance1().y(0, 1),
    alliance1().x(0, 1),
    alliancePickTimer().y(0, 1),
    alliance1Pick().y(100, 1)
  );

  const scoutingMessage = createRef<Rect>();
  view.add(
    generateRect(
      1204.93,
      407.5,
      colorOne,
      scoutingMessage,
      0,
      -452.65 - 407.5,
      [generateText("Scouting!", 100)]
    )
  );

  yield* waitFor(1);
  yield* beginSlide("Scouting Message");
  yield* all(
    FRCFieldRef().x(-960 - (669 * 2.5) / 2, 1),
    notPickedTeams().x(-960 - 900, 1),
    alliancePickTimer().x(-960 - 900, 1),
    scoutingMessage().x(0, 1),
    scoutingMessage().y(0, 1)
  );
  FRCFieldRef().remove();
  notPickedTeams().remove();
  alliancePickTimer().remove();

  const scoutingFlowChart = createRef<Rect>();
  const scoutingFlowChartDataCollection = createRef<Rect>();
  const scoutingFlowChartParsing = createRef<Rect>();
  const scoutingFlowChartAnalysis = createRef<Rect>();
  view.add(
    generateRect(1845.4, 600.14, colorOne, scoutingFlowChart, 0, 501 + 600.14, [
      generateRect(
        527.07,
        356.81,
        colorTwo,
        scoutingFlowChartDataCollection,
        -613.62
      ),
      generateText("Data Collection", 40, -613.62, 0),
      generateArrow([
        [-613.62 + 527.07 / 2, 0],
        [0 - 527.07 / 2, 0],
      ]),

      generateRect(527.07, 356.81, colorTwo, scoutingFlowChartParsing, 0),
      generateText("Parsing", 40, 0, 0),
      generateArrow([
        [0 + 527.07 / 2, 0],
        [613.62 - 527.07 / 2, 0],
      ]),

      generateRect(527.07, 356.81, colorTwo, scoutingFlowChartAnalysis, 613.62),
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

  yield* waitFor(1);
  yield* beginSlide("Scouting Flowchart");
  yield* all(
    scoutingMessage().width(788.93, 1),
    scoutingMessage().height(266.81, 1),
    scoutingMessage().y(-368.5, 1),
    scoutingFlowChart().y(129.86, 1)
  );

  yield* waitFor(1);
  yield* beginSlide("Scouting Flowchart Data Collection");
  yield* all(
    scoutingFlowChartDataCollection().lineWidth(25, 0.5),
    scoutingFlowChartParsing().lineWidth(5, 0.5),
    scoutingFlowChartAnalysis().lineWidth(5, 0.5)
  );

  yield* waitFor(1);
  yield* beginSlide("Scouting Flowchart Parsing");
  yield* all(
    scoutingFlowChartDataCollection().lineWidth(5, 0.5),
    scoutingFlowChartParsing().lineWidth(25, 0.5),
    scoutingFlowChartAnalysis().lineWidth(5, 0.5)
  );

  yield* waitFor(1);
  yield* beginSlide("Scouting Flowchart Analysis");
  yield* all(
    scoutingFlowChartDataCollection().lineWidth(5, 0.5),
    scoutingFlowChartParsing().lineWidth(5, 0.5),
    scoutingFlowChartAnalysis().lineWidth(25, 0.5)
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

  yield* waitFor(1);
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

  const vscouterDescriptionBox = createRef<Rect>();
  const vscouterDescriptionText = createRef<Txt>();
  view.add(
    generateRect(
      872.5,
      173.04,
      colorTwo,
      vscouterDescriptionBox,
      960.77 + 440.78,
      -320.92,
      [
        generateText(
          `- Data collection though a website found at \nhttps://vscouter.netlify.app/`,
          43,
          0,
          0,
          undefined,
          vscouterDescriptionText
        ),
      ]
    )
  );

  const vscouterDescriptionImageP1 = createRef<Img>();
  const vscouterDescriptionImageP2 = createRef<Img>();
  const vscouterDescriptionImageP3 = createRef<Img>();
  const vscouterDescriptionImageP4 = createRef<Img>();
  const vscouterDescriptionImageP5 = createRef<Img>();
  view.add(
    <Layout>
      <Img
        ref={vscouterDescriptionImageP1}
        src={InternetIcon}
        width={578.67}
        x={1920}
        y={118.1}
      />
      <Img
        ref={vscouterDescriptionImageP2}
        src={WifiIcon}
        width={641.84}
        x={1920}
        y={118.1}
      />
      <Img
        ref={vscouterDescriptionImageP3}
        src={AutoCompletionImage}
        width={939.95}
        x={1920}
        y={118.1}
      />
      <Img
        ref={vscouterDescriptionImageP4}
        src={FlashDriveImage}
        width={512}
        x={1920}
        y={118.1}
      />

      <Img
        ref={vscouterDescriptionImageP5}
        src={PowerBIImage}
        width={512}
        x={1920}
        y={118.1}
      />
    </Layout>
  );

  yield* waitFor(1);
  yield* beginSlide("VScouter Explanation P1");
  yield* all(
    scoutingMessage().x(-960.77 - 788.93, 1),
    vscouterLogoArrow().x(-960.77 - 788.93, 1),
    vscouterLogo().x(-447.44, 1),
    vscouterDescriptionImageP1().x(476.25, 1),
    vscouterDescriptionBox().x(476.25, 1)
  );
  vscouterLogoArrow().remove();
  scoutingMessage().remove();

  yield* waitFor(1);
  yield* beginSlide("VScouter Explanation P2");
  yield* all(
    vscouterDescriptionImageP1().y(1080, 1),
    vscouterDescriptionImageP2().x(476.25, 1),
    vscouterDescriptionText().text(
      "- Scouting can be done offline in \nenvironments with no internet",
      1
    )
  );
  vscouterDescriptionImageP1().remove();

  yield* waitFor(1);
  yield* beginSlide("VScouter Explanation P3");
  yield* all(
    vscouterDescriptionImageP2().y(1080, 1),
    vscouterDescriptionImageP3().x(476.25, 1),
    vscouterDescriptionText().text(
      "- Auto completion to make selecting teams \nto scout easier",
      1
    )
  );
  vscouterDescriptionImageP2().remove();

  yield* waitFor(1);
  yield* beginSlide("VScouter Explanation P4");
  yield* all(
    vscouterDescriptionImageP3().y(1080, 1),
    vscouterDescriptionImageP4().x(476.25, 1),
    vscouterDescriptionText().text(
      "- USB flash drive data collection process",
      1
    )
  );
  vscouterDescriptionImageP3().remove();

  yield* waitFor(1);
  yield* beginSlide("VScouter Explanation P5");
  yield* all(
    vscouterDescriptionImageP4().y(1080, 1),
    vscouterDescriptionImageP5().x(476.25, 1),
    vscouterDescriptionText().text(
      "- Analysis through PowerBI",
      1
    )
  );
  vscouterDescriptionImageP4().remove();

  const dataCollectionDemo = createRef<Rect>();
  view.add(
    generateRect(
      825,
      377.76,
      colorTwo,
      dataCollectionDemo,
      0,
      -654.07 - 377.76,
      [generateText("Data Collection Demo", 75)]
    )
  );

  yield* waitFor(1);
  yield* beginSlide("Data Collection Demo");
  yield* all(
    vscouterDescriptionBox().y(1080, 1),
    vscouterDescriptionImageP5().y(1080, 1),
    vscouterLogo().x(-959.23 - 814.87, 1),
    dataCollectionDemo().y(0, 1)
  );
  vscouterDescriptionBox().remove();
  vscouterDescriptionImageP5().remove();
  vscouterLogo().remove();

  const leftParsingFlowChart = createRef<Layout>();
  view.add(
    <Layout ref={leftParsingFlowChart} x={-979.95}>
      {generateRect(380, 200, colorOne, undefined, -669.95, -301.92, [
        generateText("Red Scouter 1", 45),
      ])}
      {generateRect(380, 200, colorOne, undefined, -669.95, 0, [
        generateText("Red Scouter 2", 45),
      ])}
      {generateRect(380, 200, colorOne, undefined, -669.95, 301.92, [
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
      {generateRect(380, 200, colorOne, undefined, 669.95, -301.92, [
        generateText("Blue Scouter 1", 45),
      ])}
      {generateRect(380, 200, colorOne, undefined, 669.95, 0, [
        generateText("Blue Scouter 2", 45),
      ])}
      {generateRect(380, 200, colorOne, undefined, 669.95, 301.92, [
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

  const centerParsingFlowChart = createRef<Rect>();
  view.add(
    generateRect(
      455,
      420,
      colorTwo,
      centerParsingFlowChart,
      0,
      -541.46 - 420 / 2,
      [generateText("Server", 65)]
    )
  );

  yield* waitFor(1);
  yield* beginSlide("Parsing Flowchart");
  yield* all(
    dataCollectionDemo().y(654.07 + 377.76, 1),
    leftParsingFlowChart().x(0, 1),
    rightParsingFlowChart().x(0, 1),
    centerParsingFlowChart().y(0, 1)
  );
  dataCollectionDemo().remove();

  const typesOfTransfer = createRef<Layout>();
  const bluetoothTransfer = createRef<Rect>();
  const flashDriveTransfer = createRef<Rect>();
  const qrCodeTransfer = createRef<Rect>();
  view.add(
    <Layout x={954.98 + 1799.98 / 2} ref={typesOfTransfer}>
      {generateText("Ways To Transfer Data", 100, 0, -401.85)}

      {generateTypeOfTransfer(
        -615,
        75,
        colorTwo,
        colorOne,
        "Bluetooth",
        "- Offline Data Sharing\n- Contactless",
        "- Small Max Bandwidth\n- Device Pairing Challenges\n- Compatibility Limitations",
        undefined,
        bluetoothTransfer
      )}
      {generateTypeOfTransfer(
        0,
        75,
        colorTwo,
        colorOne,
        "Flash Drives",
        "- Offline Data Sharing\n- Large Bandwidth\n- Reliable\n- Universally Compatible",
        "- Manual Process\n- Lack of Automation\n- No Real-Time Updates",
        "green",
        flashDriveTransfer
      )}
      {generateTypeOfTransfer(
        615,
        75,
        colorTwo,
        colorOne,
        "QR Codes",
        "- Offline Data Sharing\n- Quick Data Sharing\n- Universally Compatible\n- Cost-Effective",
        "- Smaller Max Bandwidth\n- Manual Process\n- No Real-Time Updates\n- Possibility of Data Splits",
        "yellow",
        qrCodeTransfer
      )}
    </Layout>
  );

  yield* waitFor(1);
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

  const wirelessIconRef = createRef<Img>();
  const fileDiagram = createRef<Layout>();
  const appleDiagram = createRef<Layout>();
  view.add(
    <Layout>
      <Img
        ref={wirelessIconRef}
        src={WirelessIcon}
        x={1920}
        y={0}
        width={579.17}
        height={579.17}
      />

      <Layout ref={fileDiagram} x={1920}>
        <Img src={FileIcon} width={320} />

        <Img src={FileIcon} width={232} x={450} y={-260} />
        <Img src={FileIcon} width={232} x={450} />
        <Img src={FileIcon} width={232} x={450} y={260} />
      </Layout>

      <Layout ref={appleDiagram} x={1920}>
        <Img src={AppleIcon} height={579.17} />
        <Img src={XIcon} width={579.17} />
      </Layout>
    </Layout>
  );

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Bluetooth P1");
  yield* all(
    flashDriveTransfer().x(1920, 1),
    qrCodeTransfer().x(1920, 1),
    wirelessIconRef().x(288.64, 1)
  );

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Bluetooth P2");
  yield* all(wirelessIconRef().y(1080, 1), fileDiagram().x(288.64, 1));
  wirelessIconRef().remove();

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Bluetooth P3");
  yield* all(fileDiagram().y(1080, 1), appleDiagram().x(288.64, 1));
  fileDiagram().remove();

  const fileIconRef = createRef<Img>();
  const notFileDiagram = createRef<Layout>();
  const shieldIconRef = createRef<Img>();
  view.add(
    <Layout>
      <Img src={FileIcon} ref={fileIconRef} x={1920} />

      <Layout ref={notFileDiagram} x={1920}>
        <Img src={FileIcon} width={320} />

        <Img src={FileIcon} width={232} x={450} y={-260} />
        <Img src={FileIcon} width={232} x={450} />
        <Img src={FileIcon} width={232} x={450} y={260} />

        <Img src={XIcon} width={405.58} x={450} />
      </Layout>

      <Img src={ShieldIcon} width={512} ref={shieldIconRef} x={1920} />
    </Layout>
  );

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Flash Drives P1");
  yield* all(
    bluetoothTransfer().x(-1920, 1),
    flashDriveTransfer().x(-615, 1),
    appleDiagram().y(1080, 1),
    fileIconRef().x(288.64, 1)
  );
  appleDiagram().remove();

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Flash Drives P2");
  yield* all(fileIconRef().y(1080, 1), notFileDiagram().x(288.64, 1));
  fileIconRef().remove();

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Flash Drives P3");
  yield* all(notFileDiagram().y(1080, 1), shieldIconRef().x(288.64, 1));
  notFileDiagram().remove();

  const timeIconRef = createRef<Img>();
  const fileDiagram2 = createRef<Layout>();
  view.add(
    <Layout>
      <Img src={TimeIcon} ref={timeIconRef} x={1920} />

      <Layout ref={fileDiagram2} x={1920}>
        <Img src={FileIcon} width={320} />

        <Img src={FileIcon} width={232} x={450} y={-260} />
        <Img src={FileIcon} width={232} x={450} />
        <Img src={FileIcon} width={232} x={450} y={260} />
      </Layout>
    </Layout>
  );

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data QR Codes P1");
  yield* all(
    flashDriveTransfer().x(-1920, 1),
    qrCodeTransfer().x(-615, 1),
    shieldIconRef().y(1080, 1),
    timeIconRef().x(288.64, 1)
  );
  shieldIconRef().remove();

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data QR Codes P2");
  yield* all(timeIconRef().y(1080, 1), fileDiagram2().x(288.64, 1));
  timeIconRef().remove();

  yield* waitFor(1);
  yield* beginSlide("Ways To Transfer Data Conclusion");
  yield* all(
    fileDiagram2().y(1080, 1),
    bluetoothTransfer().x(-615, 1),
    flashDriveTransfer().x(0, 1),
    qrCodeTransfer().x(615, 1)
  );
  fileDiagram2().remove();

  const parseDataDemo = createRef<Rect>();
  view.add(
    generateRect(825, 377.76, colorTwo, parseDataDemo, 0, -654.07 - 377.76, [
      generateText("Parsing Data Demo", 75),
    ])
  );

  yield* waitFor(1);
  yield* beginSlide("Parsing Data Demo");
  yield* all(
    parseDataDemo().y(0, 1),
    typesOfTransfer().x(-954.98 - 1799.98 / 2, 1)
  );
  typesOfTransfer().remove();

  const analysisToPowerBI = createRef<Layout>();
  view.add(
    <Layout ref={analysisToPowerBI} x={-959.58 - 1568.5 / 2}>
      {generateRect(605.18, 301.1, colorTwo, undefined, -447.08, 0, [
        generateText("Analysis", 75),
      ])}
      {generateArrow([
        [-139.49, 0],
        [144.49, 0],
      ])}
    </Layout>
  );

  const powerBIImageRef = createRef<Img>();
  view.add(
    <Img
      ref={powerBIImageRef}
      src={PowerBIImage}
      width={630}
      height={630}
      x={-960 - 630 / 2}
      y={0}
    />
  );

  yield* waitFor(1);
  yield* beginSlide("Analysis P1");
  yield* all(
    parseDataDemo().y(654.07 + 377.76, 1),
    powerBIImageRef().x(481.66, 1),
    analysisToPowerBI().x(0, 1)
  );
  parseDataDemo().remove();

  const powerBIDescription = createRef<Rect>();
  view.add(
    generateRect(
      872.5,
      814.87,
      colorTwo,
      powerBIDescription,
      960.77 + 440.78,
      0,
      [
        generateText(
          `- An analytics tool developed by Microsoft \nthat enables users to visualize data and \ncreate interactive reports.\n\n- Has the ability to import data from \nsources like databases, Excel, and CSV files\n\n- Free for personal use`,
          43,
          0,
          0
        ),
      ]
    )
  );

  yield* waitFor(1);
  yield* beginSlide("Analysis P2");
  yield* all(
    analysisToPowerBI().x(-999.92 - 894.17 / 2, 1),
    powerBIImageRef().x(-447.5, 1),
    powerBIDescription().x(440.78, 1)
  );
  analysisToPowerBI().remove();

  const analysisDemoBox = createRef<Rect>();
  const analysisDemoText = createRef<Txt>();
  view.add(
    generateRect(825, 377.76, colorTwo, analysisDemoBox, 0, -654.07 - 377.76, [
      generateText("Analysis Demo", 75, 0, 0, "black", analysisDemoText),
    ])
  );

  yield* waitFor(1);
  yield* beginSlide("Analysis Demo");
  yield* all(
    powerBIImageRef().x(-960 - 630 / 2, 1),
    powerBIDescription().x(960 + 872.5 / 2, 1),
    analysisDemoBox().y(0, 1)
  );
  powerBIImageRef().remove();
  powerBIDescription().remove();

  const conclusionPage = createRef<Layout>();
  view.add(
    <Layout ref={conclusionPage} x={960 + 1684.05 / 2}>
      {generateText("Thank You!", 150, -420, -325.18)}
      <Line
        stroke={"black"}
        lineWidth={10}
        points={[
          [-787.84 - 31.14, -256.43],
          [9.43 - 31.14, -256.43],
        ]}
      />

      {generateText("Contact Me Or", 60, -420, -171.2)}
      {generateText("Find The Code For VScouter!", 60, -420, -100)}
      {generateArrow([
        [-420, -70],
        [-420, 50],
      ])}
      <Img
        src={VihaanLinkTreeImage}
        width={433.17}
        height={433.17}
        x={-420}
        y={275}
      />

      <Img
        src={VScouterLogoImage}
        width={814.62}
        height={814.62}
        x={484.26}
        y={0}
      />
    </Layout>
  );

  yield* waitFor(1);
  yield* beginSlide("Conclusion");
  yield* all(
    analysisDemoText().y(-1000, 1),
    analysisDemoBox().width(1920, 1),
    analysisDemoBox().height(1080, 1),
    analysisDemoBox().radius(0, 1),
    analysisDemoBox().lineWidth(0, 1),
    conclusionPage().x(0, 1)
  );
  analysisDemoText().remove();

  yield* waitFor(1);
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
  fill?: string,
  ref?: Reference<Txt>
) {
  return (
    <Txt
      x={x}
      y={y}
      fontSize={fontSize}
      fontFamily={"Bahnschrift"}
      text={text}
      fill={fill !== undefined ? fill : "black"}
      ref={ref}
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
  important?: string,
  ref?: Reference<Rect>
) {
  return (
    <Rect
      ref={ref}
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

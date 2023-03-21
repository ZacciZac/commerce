import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./frame-component1.module.css";

type FrameComponent1Type = {
  rectangle478?: string;
  designToCode?: string;
  minRead?: string;
  locofyaiTurnFigmaToCode?: string;
  goFromFigmaToCodeInMinimu?: string;
  avatar?: string;
  annaRos?: string;
  postedJustNow?: string;

  /** Style props */
  frame7661AlignSelf?: Property.AlignSelf;
  line2Width?: Property.Width;
  frame7639AlignSelf?: Property.AlignSelf;
  frame7645Flex?: Property.Flex;
  frame7645JustifyContent?: Property.JustifyContent;
  frame7645Gap?: Property.Gap;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle478,
  designToCode,
  minRead,
  locofyaiTurnFigmaToCode,
  goFromFigmaToCodeInMinimu,
  frame7661AlignSelf,
  line2Width,
  avatar,
  annaRos,
  postedJustNow,
  frame7639AlignSelf,
  frame7645Flex,
  frame7645JustifyContent,
  frame7645Gap,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frame7661AlignSelf,
    };
  }, [frame7661AlignSelf]);

  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: line2Width,
    };
  }, [line2Width]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frame7639AlignSelf,
    };
  }, [frame7639AlignSelf]);

  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      flex: frame7645Flex,
      justifyContent: frame7645JustifyContent,
      gap: frame7645Gap,
    };
  }, [frame7645Flex, frame7645JustifyContent, frame7645Gap]);

  return (
    <div className={styles.rectangleParent} style={frameDiv1Style}>
      <img className={styles.frameChild} alt="" src={rectangle478} />
      <div className={styles.frameParent} style={frameDiv2Style}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.designToCodeParent}>
              <div className={styles.designToCode}>{designToCode}</div>
              <div className={styles.minReadWrapper}>
                <div className={styles.minRead}>{minRead}</div>
              </div>
            </div>
            <b className={styles.locofyaiTurn}>{locofyaiTurnFigmaToCode}</b>
          </div>
          <div className={styles.goFromFigmaToCodeInMinimWrapper}>
            <div className={styles.goFromFigma}>
              {goFromFigmaToCodeInMinimu}
            </div>
          </div>
        </div>
        <div className={styles.lineParent} style={frameDivStyle}>
          <div className={styles.frameItem} style={lineDivStyle} />
          <div className={styles.articleAuthor}>
            <img className={styles.avatarIcon} alt="" src={avatar} />
            <div className={styles.authorText}>
              <div className={styles.annaRos}>{annaRos}</div>
              <div className={styles.postedJustNow}>{postedJustNow}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

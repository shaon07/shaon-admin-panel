import { styles } from '@/styles/tailwind/MapChartViewLayer/index.css';
import { VectorMap } from '@react-jvectormap/core';
import { usAea } from '@react-jvectormap/unitedstates';

export default function MapChartViewLayer() {
    return (
        <div className={`${styles.mapChartWrapper}`}>
            <h4 className={`${styles.heading}`}>
                Region labels
            </h4>
            <div id="mapOne" className={`${styles.mapWrapper}`}>
                <VectorMap
                    map={usAea}
                    backgroundColor="white"
                    regionStyle={{
                        initial: {
                            fill: "#D1D5DB",
                        },
                        hover: {
                            fillOpacity: 1,
                            fill: "blue",
                        },
                        selected: {
                            fill: "#FFFB00",
                        },
                    }}
                    onRegionTipShow={function reginalTip(event, label, code) {
                        //@ts-ignore
                        return label.html(`
          <div style="background-color: #F8FAFC; color: black; padding: 2px 8px"; >
            ${
                            //@ts-ignore
                            label.html()
                            }
          </div>`);
                    }}
                />
            </div>
        </div>
    )
}

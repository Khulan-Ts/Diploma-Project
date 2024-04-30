import React, { useState } from "react"; 
import {TouchableOpacity, FlatList,  View, StyleSheet, Pressable, Image, useWindowDimensions, Animated } from 'react-native';
import FONT from './Titles';


export const aboutusHover = ({
    type,
    text,
    icon,
    descr,
    style
}) => {
    const { width, height } = useWindowDimensions();

    const [isHovered, setIsHovered] = React.useState(false);
    const descrOpacity = React.useRef(new Animated.Value(0)).current;
    const iconOpacity = React.useRef(new Animated.Value(1)).current;
    const textTranslateY = React.useRef(new Animated.Value(0)).current;
    const ExpandableListItem = ({ item }) => { 
        const [expanded, setExpanded] = useState(false); 
    
        const toggleExpand = () => { 
            setExpanded(!expanded); 
        }; 
    
        return ( 
            <View style={styles.itemContainer}> 
                <TouchableOpacity 
                    onPress={toggleExpand} 
                    style={styles.itemTouchable} 
                > 
                    <Text style={styles.itemTitle}> 
                        {item.title} 
                    </Text> 
                </TouchableOpacity> 
                {expanded && ( 
                    <Text style={styles.itemContent}> 
                        {item.content} 
                    </Text> 
                )} 
            </View> 
        ); 
    }; 
  
    const ExpandableList = ({ data }) => { 
        const renderItem = ({ item }) => ( 
            <ExpandableListItem item={item} /> 
        ); 
    
        return ( 
            <FlatList 
                data={data} 
                renderItem={renderItem} 
                keyExtractor={(item) => item.id.toString()} 
            /> 
        ); 
    }; 
  
    const dptExpandable = () => { 
        const data = [ 
            { 
                id: 1, 
                title: "Admission Requirements", 
                content: 
                    `All applicatints must have completed or be expected to complete high school, secondary educateion, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process.\nThe Entrance Exam consists of three sections: Essay, Grammar & Vocabulary.\n70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%\n30% Statement of Purpose & Recommendation Letter`, 
            }, 
            { 
                id: 2, 
                title: "Curriculum", 
                content: 
                    `Download checklist`, 
            }, 

        ]; 
    
        return ( 
            <View style={styles.container}> 
                <ExpandableList data={data} /> 
            </View> 
        ); 
    }; 
};
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: "#f5f5f5", 
        padding: 20, 
    }, 
    header: { 
        fontSize: 30, 
        fontWeight: "bold", 
        marginBottom: 20, 
        color: "green", 
        textAlign: "center", 
    }, 
    subheader: { 
        fontSize: 20, 
        fontWeight: "bold", 
        marginBottom: 20, 
        textAlign: "center", 
    }, 
    itemContainer: { 
        marginBottom: 15, 
        padding: 10, 
        backgroundColor: "#EDF0FF", 
        borderRadius: 10, 
        // elevation: 3, 
    }, 
    itemTouchable: { 
        borderRadius: 10, 
        overflow: "hidden", 
    }, 
    itemTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#333", 
    }, 
    itemContent: { 
        marginTop: 10, 
        fontSize: 14, 
        color: "#666", 
    }, 
}); 
  
export default dptExpandable;
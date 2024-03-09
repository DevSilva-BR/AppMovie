import React,{useState, useEffect} from "react"

import { 
SafeAreaView, 
Text, 
View,
Button, 
Flatlist
Image,
StyleSheet,
ActivityIndicator
 } from 'react-native';

export default function App() {
	const[movies, setMovies] = useState<>([]);
	const [loading, setLoading] = useState<boolean>(false)
	const handleloadButton = async()=>{
		const req = await fetch("https://api.b7web.com.br/cinema/");
		// transformando o json em texto
		const json = await req.json();
		
		if(json){
		setMovies(json)
		}
		
	}
	useEffect(()=>{
	
	
	},[])
	return (
    <SafeAreaView style={syles.container}>
	<Button title="Carrega filmes" onpress={handleloadButton}/>
	{loading && 
		<View style={styles.loadingArea}>
			<ActivityIndicator 
			
			/>
			<Text style={styles.loadingText}>
				Carregando...
			</Text>
		</View>
	}
	
	{!loading && 
		<>
		      <Text style={styles.totalMoveisText}>Total de filmes disponivel:{movies.length}</Text>
				<Flatlist
	style={styles.list}
	data={movies}
	renderItem={(item)=>{
	<View style={styles.movieItem}>
		<Text style={stlyes.movieTitle}>{item.titulo}</Text>
		<Image 
		source={{uri:item.avatar}} 
		style={styles.movieImage}
		resizeMode="contain"
		>
	</View>
		
	}}
	keyExtractor={item => item.titulo}
	/>
	</>
	
	}
		</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalMoveisText:{
	color:"#ffff",
	fontSize:18,
	textAlign:"center",
	marginTop: 10,
	marginBottom:10
  },
  list:{
	flex:1
  },
  movieItem{
	marginBottom:30,
  },
  movieImage:{
	height:400,
	
  },
  movieTitle:{
	color:"#ffff",
	fontSize:24,
	textAlign:"center",
	marginTop:5,
	
  }
});

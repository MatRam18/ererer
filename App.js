import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cargos de TI</Text>

        <Text style={styles.tituloCargo}>Programador Júnior</Text>
        <Text style={styles.textoCargo}>
          <Text style={styles.subtitulo}>Experiência: </Text>Normalmente de 0 a 2 anos de experiência na área.  
          <Text style={styles.subtitulo}>Responsabilidades: </Text>O programador júnior está começando a carreira e precisa de orientação constante. Suas tarefas são geralmente mais simples e podem incluir manutenção de código existente, correção de bugs e implementação de pequenas funcionalidades sob supervisão.  
          <Text style={styles.subtitulo}>Autonomia: </Text>Requer acompanhamento de um desenvolvedor mais experiente (como um programador pleno ou sênior).  
          <Text style={styles.subtitulo}>Habilidades: </Text>Conhecimento básico de linguagens de programação e frameworks. O foco está no aprendizado e na evolução técnica.
        </Text>
        <Image style={styles.imgCargo} source={require('./assets/JUNIOR.jpg')} />

        <Text style={styles.tituloCargo}>Programador Pleno</Text>
        <Text style={styles.textoCargo}>
          <Text style={styles.subtitulo}>Experiência: </Text>De 2 a 5 anos de experiência na área.  
          <Text style={styles.subtitulo}>Responsabilidades: </Text>O programador pleno tem maior autonomia para tomar decisões sobre o desenvolvimento de software. Ele pode ser responsável por parte do sistema, implementar funcionalidades mais complexas e até mesmo realizar a análise de requisitos.  
          <Text style={styles.subtitulo}>Autonomia: </Text>Consegue trabalhar com pouca supervisão e é capaz de tomar decisões técnicas com confiança, mas pode precisar de orientação para tarefas mais complexas.  
          <Text style={styles.subtitulo}>Habilidades: </Text>Profundo conhecimento de linguagens e frameworks, boas práticas de desenvolvimento, controle de versão e ferramentas de integração contínua. Além disso, já pode estar começando a se envolver em discussões sobre arquitetura de sistemas.
        </Text>
        <Image style={styles.imgCargo} source={require('./assets/pleno.png')} />

        <Text style={styles.tituloCargo}>Programador Sênior</Text>
        <Text style={styles.textoCargo}>
          <Text style={styles.subtitulo}>Experiência: </Text>Geralmente mais de 5 anos de experiência na área.  
          <Text style={styles.subtitulo}>Responsabilidades: </Text>O programador sênior tem responsabilidade sobre decisões técnicas importantes e a arquitetura do sistema. Ele pode ser líder de equipe ou mentor de desenvolvedores mais jovens. Além de codificar, também auxilia no planejamento, design e soluções para problemas mais desafiadores.  
          <Text style={styles.subtitulo}>Autonomia: </Text>Trabalha com total autonomia, sendo capaz de tomar decisões técnicas complexas e definir direções para o projeto. Também pode ser responsável por interações com outras equipes, como as de produto, design ou negócios.  
          <Text style={styles.subtitulo}>Habilidades: </Text>Profundo conhecimento técnico em várias linguagens, frameworks e metodologias. Habilidade em gerenciar projetos e equipes, além de experiência com a liderança de processos de desenvolvimento, testes, integração e entrega contínuos. Uma grande compreensão sobre boas práticas e padrões de código.
        </Text>
        <Image style={styles.imgCargo} source={require('./assets/senior.jpg')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tituloCargo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  textoCargo: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'justify',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  imgCargo: {
    width: 300,
    height: 200,
    marginVertical: 10,
    resizeMode: 'contain',
  },
});

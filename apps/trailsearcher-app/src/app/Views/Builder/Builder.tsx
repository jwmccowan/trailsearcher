import * as React from 'react';
import { BuilderMenu, NameButton } from './components';
import { Container, AppHeader, ChoiceButton, InputButton } from '@trailsearcher/components';
import styled from 'styled-components';
import { PCClass, Ancestry, getPCClassList, getAncestryList } from '@trailsearcher/character-sheet';
import { Grid } from '@material-ui/core';
// import styled from 'styled-components';
// import { useToggle, CharacterSheetContext, Container, H5, H1, H2, H4 } from '@trailsearcher/components';
// import { BuilderNav } from './components';
// import { calculateAbilityModifierFromScores, AbilityScore } from '@trailsearcher/character-sheet';

// const StyledBuilder = styled.div`
//   background-color: darkgrey;
//   display: flex;
//   flex-direction: column;
//   min-height: 1vh;
// `;

// export const Builder: React.FC = () => {
//   const [menuOpen, dispatch] = useToggle();
//   const [cs] = React.useContext(CharacterSheetContext);

//   return (
//     <StyledBuilder>
//       <BuilderNav onMenuToggle={() => dispatch('toggleOn')} />
//       {/* <BuilderMenu open={menuOpen} requestToggle={() => dispatch('toggle')} /> */}
//       <Container>
//         <H1>Character Sheet</H1>
//         <H2>Character Details</H2>
//         <H4>{`Name: ${cs.details.name}`}</H4>
//         <H4>{`Player Name: ${cs.details.playerName}`}</H4>
//         <H4>Ability Scores</H4>
//         <Container>
//           <H5>{`Strength: ${Math.sign(
//             calculateAbilityModifierFromScores(AbilityScore.strength, cs.baseAbilityScores)
//           )} (${cs.baseAbilityScores.strength.score})`}</H5>
//           <H5>{`Dexterity: ${Math.sign(
//             calculateAbilityModifierFromScores(AbilityScore.dexterity, cs.baseAbilityScores)
//           )} (${cs.baseAbilityScores.dexterity.score})`}</H5>
//           <H5>{`Constitution: ${Math.sign(
//             calculateAbilityModifierFromScores(AbilityScore.constitution, cs.baseAbilityScores)
//           )} (${cs.baseAbilityScores.constitution.score})`}</H5>
//           <H5>{`Intelligence: ${Math.sign(
//             calculateAbilityModifierFromScores(AbilityScore.intelligence, cs.baseAbilityScores)
//           )} (${cs.baseAbilityScores.intelligence.score})`}</H5>
//           <H5>{`Wisdom: ${Math.sign(calculateAbilityModifierFromScores(AbilityScore.wisdom, cs.baseAbilityScores))} (${
//             cs.baseAbilityScores.wisdom.score
//           })`}</H5>
//           <H5>{`Charisma: ${Math.sign(
//             calculateAbilityModifierFromScores(AbilityScore.charisma, cs.baseAbilityScores)
//           )} (${cs.baseAbilityScores.charisma.score})`}</H5>
//         </Container>
//       </Container>
//     </StyledBuilder>
//   );
// };

const BuilderContainer = styled(Container)`
  margin-top: 32px;
`;

export const Builder = () => {
  const [name, setName] = React.useState('Joojoo Toejam');
  const [clss, setClass] = React.useState(PCClass.fighter);
  const [ancestry, setAncestry] = React.useState(Ancestry.human);

  return (
    <div>
      <AppHeader title="Builder">
        <BuilderMenu />
      </AppHeader>
      <BuilderContainer>
        <Grid container>
          <Grid item xs={12}>
            <InputButton
              buttonTitle="Name:"
              dialogTitle="What is your name?"
              onSetValue={setName}
              initialValue={name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChoiceButton
              buttonTitle="Ancesstry:"
              dialogTitle="Choose an ancestry"
              onSetValue={setAncestry}
              value={ancestry}
              values={getAncestryList().map(anc => ({ name: anc.name, val: anc.ancestry }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChoiceButton
              buttonTitle="Class:"
              dialogTitle="Choose a class"
              onSetValue={setClass}
              value={clss}
              values={getPCClassList().map(pcc => ({ name: pcc.name, val: pcc.class }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChoiceButton
              buttonTitle="Class:"
              dialogTitle="Choose a class"
              onSetValue={setClass}
              value={clss}
              values={getPCClassList().map(pcc => ({ name: pcc.name, val: pcc.class }))}
            />
          </Grid>
        </Grid>
      </BuilderContainer>
    </div>
  );
};

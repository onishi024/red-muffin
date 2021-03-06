import { connect } from 'react-redux'
import * as Actions from '../../actions'
import Header from '../presentations/Header'

const mapStateToProps = state => ({
  app_bar_open: state.reducers.app_bar_open,
  group_select_open: state.reducers.group_select_open,
  groups: state.reducers.groups,
  selected_group_id: state.reducers.selected_group_id,
})

const mapDispatchToProps = dispatch => ({
  onClickAppBar: () => dispatch(Actions.onClickAppBar()),
  onClickGroup: () => dispatch(Actions.onClickGroup())
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer

export const DEPARTURE_LIGHT_LUGGAGE_UP =
  'departureLightLuggageAmount/increment';
export const DEPARTURE_LIGHT_LUGGAGE_DOWN =
  'departureLightLuggageAmount/decrement';
export const DEPARTURE_HEAVY_LUGGAGE_UP =
  'departureHeavyLuggageAmount/increment';
export const DEPARTURE_HEAVY_LUGGAGE_DOWN =
  'departureHeavyLuggageAmount/decrement';
export const ARRIVAL_LIGHT_LUGGAGE_UP = '@arrivalLightLuggageAmount/increment';
export const ARRIVAL_LIGHT_LUGGAGE_DOWN =
  '@arrivalLightLuggageAmount/decrement';
export const ARRIVAL_HEAVY_LUGGAGE_UP = '@arrivalHeavyLuggageAmount/increment';
export const ARRIVAL_HEAVY_LUGGAGE_DOWN =
  '@arrivalHeavyLuggageAmount/decrement';
export const COMBO_UP = '@COMBO/increment';
export const COMBO_DOWN = '@COMBO/decrement';
const initialValues = {
  departureLightLuggage: 0,
  departureHeavyLuggage: 0,
  arrivalLightLuggage: 0,
  arrivalHeavyLuggage: 0,
  totalPrice: 0,
};

const bookingReducer = (state = initialValues, action) => {
  switch (action.type) {
    case DEPARTURE_LIGHT_LUGGAGE_UP:
      return {
        ...state,
        departureLightLuggage: state.departureLightLuggage + 1,
        totalPrice: state.totalPrice + 44900,
      };
    case DEPARTURE_LIGHT_LUGGAGE_DOWN:
      return {
        ...state,
        departureLightLuggage: state.departureLightLuggage - 1,
        totalPrice: state.totalPrice - 44900,
      };
    case DEPARTURE_HEAVY_LUGGAGE_UP:
      if (state.departureHeavyLuggage >= 1 && state.departureHeavyLuggage < 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage + 1,
          totalPrice: state.totalPrice + 74900,
        };
      }
      if (state.departureHeavyLuggage >= 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage + 1,
          totalPrice: state.totalPrice + 79900,
        };
      }
      return {
        ...state,
        departureHeavyLuggage: state.departureHeavyLuggage + 1,
        totalPrice: state.totalPrice + 54900,
      };
    case DEPARTURE_HEAVY_LUGGAGE_DOWN:
      if (state.departureHeavyLuggage > 1 && state.departureHeavyLuggage <= 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage - 1,
          totalPrice: state.totalPrice - 74900,
        };
      }
      if (state.departureHeavyLuggage > 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage - 1,
          totalPrice: state.totalPrice - 79900,
        };
      }
      return {
        ...state,
        departureHeavyLuggage: state.departureHeavyLuggage - 1,
        totalPrice: state.totalPrice - 54900,
      };
    case ARRIVAL_LIGHT_LUGGAGE_UP:
      return {
        ...state,
        arrivalLightLuggage: state.arrivalLightLuggage + 1,
        totalPrice: state.totalPrice + 44900,
      };
    case ARRIVAL_LIGHT_LUGGAGE_DOWN:
      return {
        ...state,
        arrivalLightLuggage: state.arrivalLightLuggage - 1,
        totalPrice: state.totalPrice - 44900,
      };
    case ARRIVAL_HEAVY_LUGGAGE_UP:
      if (state.arrivalHeavyLuggage >= 1 && state.arrivalHeavyLuggage < 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage + 1,
          totalPrice: state.totalPrice + 74900,
        };
      }
      if (state.arrivalHeavyLuggage >= 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage + 1,
          totalPrice: state.totalPrice + 79900,
        };
      }
      return {
        ...state,
        arrivalHeavyLuggage: state.arrivalHeavyLuggage + 1,
        totalPrice: state.totalPrice + 54900,
      };
    case ARRIVAL_HEAVY_LUGGAGE_DOWN:
      if (state.arrivalHeavyLuggage > 1 && state.arrivalHeavyLuggage <= 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage - 1,
          totalPrice: state.totalPrice - 74900,
        };
      }
      if (state.arrivalHeavyLuggage > 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage - 1,
          totalPrice: state.totalPrice - 79900,
        };
      }
      return {
        ...state,
        arrivalHeavyLuggage: state.arrivalHeavyLuggage - 1,
        totalPrice: state.totalPrice - 54900,
      };
    case COMBO_UP:
      return {
        ...state,
        totalPrice: state.totalPrice + 44900,
      };
    case COMBO_DOWN:
      return {
        ...state,
        totalPrice: state.totalPrice - 44900,
      };
    default:
      return state;
  }
};

export default bookingReducer;

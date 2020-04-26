export const getSettings = ({packageName}) => ({
  ...((Meteor.settings &&
    Meteor.settings.packages &&
    Meteor.settings.packages[packageName]) ||
    {}),
  ...((Meteor.settings &&
    Meteor.settings &&
    Meteor.settings.public &&
    Meteor.settings.public.packages &&
    Meteor.settings.public.packages[packageName]) ||
    {}),
})

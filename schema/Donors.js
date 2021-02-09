cube(`Donors`, {
  sql: `SELECT * FROM test.donors`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [donorId, donorCity]
    }
  },
  
  dimensions: {
    donorId: {
      sql: `donor_id`,
      type: `string`
    },
    
    donorCity: {
      sql: `donor_city`,
      type: `string`
    },
    
    donorState: {
      sql: `donor_state`,
      type: `string`
    },
    
    donorIsTeacher: {
      sql: `donor_is_teacher`,
      type: `string`
    },
    
    donorZip: {
      sql: `donor_zip`,
      type: `string`
    }
  }
});

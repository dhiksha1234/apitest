const mockResponse = {
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album',
        completed:'true'
       },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel',
        completed:'false'
       }
    ]
  }
    
    
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
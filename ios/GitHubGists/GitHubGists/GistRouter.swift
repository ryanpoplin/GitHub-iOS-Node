//
//  GistRouter.swift
//  GitHubGists
//
//  Created by Ryan Poplin on 3/3/16.
//  Copyright © 2016 Luupy. All rights reserved.
//

import Foundation
import Alamofire

// enum usage:
enum GistRouter: URLRequestConvertible {
    static let baseURLString: String = "https://api.github.com"
    
    case GetPublic() // GET https://api/github.com/gists/public
    
    var URLRequest: NSMutableURLRequest {
        var method: Alamofire.Method {
            switch self {
            case .GetPublic:
                return .GET
            }
        }
        
        let result: (path: String, parameters: [String: AnyObject]?) = {
            switch self {
            case .GetPublic:
                return ("/gists/public", nil)
            }
        }()
        
        let URL = NSURL(string: GistRouter.baseURLString)!
        let URLRequest = NSMutableURLRequest(URL: URL.URLByAppendingPathComponent(result.path))
        
        let encoding = Alamofire.ParameterEncoding.JSON
        let (encodedRequest, _) = encoding.encode(URLRequest, parameters: result.parameters)
        
        encodedRequest.HTTPMethod = method.rawValue
        
        return encodedRequest
    }
    
}